(function () {
  const lang = document.documentElement.lang || 'ko';
  const copy = lang.startsWith('ja')
    ? { loading: '読み込み中です…', saved: 'メッセージを保存しました。ありがとうございます。', failed: '保存できませんでした。しばらくしてからもう一度お試しください。', loadFailed: 'メッセージを読み込めませんでした。', name: 'お名前', message: 'お祝いのメッセージをお寄せください', button: 'メッセージを送る', heading: 'お祝いのメッセージをお寄せください', intro: '温かいお祝いのメッセージをお寄せいただけましたら幸いです。' }
    : lang.startsWith('zh')
      ? { loading: '載入中…', saved: '訊息已保存，謝謝您。', failed: '保存失敗，請稍後再試。', loadFailed: '無法載入訊息。', name: '姓名', message: '請留下祝福訊息', button: '送出訊息', heading: '請留下祝福訊息', intro: '如果您能留下溫暖的祝福，我們將不勝感激。' }
      : { loading: '저장 중입니다…', saved: '메시지가 저장되었습니다. 감사합니다.', failed: '저장하지 못했습니다. 잠시 후 다시 시도해 주세요.', loadFailed: '메시지를 불러오지 못했습니다.', name: '이름', message: '축하 메시지를 남겨 주세요', button: '메시지 남기기', heading: '축하의 말씀을 남겨 주세요', intro: '따뜻한 축복과 메시지를 남겨 주시면 감사하겠습니다.' };
  const box = document.querySelector('.personal-guestbook');
  if (!box || !window.supabase) return;
  box.querySelector('h3').textContent = copy.heading;
  box.querySelector('.personal-guestbook-intro').textContent = copy.intro;
  const nameInput = box.querySelector('[name="name"]');
  const messageInput = box.querySelector('[name="message"]');
  const button = box.querySelector('button');
  nameInput.placeholder = copy.name; messageInput.placeholder = copy.message; button.textContent = copy.button;
  const client = window.supabase.createClient('https://fcmweukmslrngzlatxmf.supabase.co', 'sb_publishable_0wX0kzxCLTEurQyVWP9Ybg_Lpon7Go7');
  const status = box.querySelector('.personal-guestbook-status');
  const list = box.querySelector('.personal-guestbook-list');
  const pagination = document.createElement('div'); pagination.className = 'personal-guestbook-pagination'; box.append(pagination);
  const pageSize = 10; let allItems = []; let currentPage = 1;
  function render(items, page = 1) { allItems = items; currentPage = Math.max(1, Math.min(page, Math.ceil(items.length / pageSize) || 1)); list.replaceChildren(); items.slice((currentPage - 1) * pageSize, currentPage * pageSize).forEach((item) => { const article = document.createElement('article'); article.className = 'personal-guestbook-item'; const name = document.createElement('strong'); name.textContent = item.name; const text = document.createElement('p'); text.textContent = item.message; article.append(name, text); list.append(article); }); const totalPages = Math.ceil(items.length / pageSize); pagination.replaceChildren(); if (totalPages > 1) { const previous = document.createElement('button'); previous.textContent = lang.startsWith('ja') ? '前へ' : lang.startsWith('zh') ? '上一頁' : '이전'; previous.disabled = currentPage === 1; previous.onclick = () => render(allItems, currentPage - 1); const label = document.createElement('span'); label.textContent = `${currentPage} / ${totalPages}`; const next = document.createElement('button'); next.textContent = lang.startsWith('ja') ? '次へ' : lang.startsWith('zh') ? '下一頁' : '다음'; next.disabled = currentPage === totalPages; next.onclick = () => render(allItems, currentPage + 1); pagination.append(previous, label, next); } }
  async function load() { const { data, error } = await client.from('messages').select('name,message,created_at').order('created_at', { ascending: false }); if (error) { status.textContent = copy.loadFailed; return; } render(data || [], 1); }
  box.querySelector('form').addEventListener('submit', async (event) => { event.preventDefault(); status.textContent = copy.loading; const name = nameInput.value.trim(); const message = messageInput.value.trim(); const { error } = await client.from('messages').insert({ name, message }); if (error) { status.textContent = copy.failed; return; } box.querySelector('form').reset(); status.textContent = copy.saved; load(); });
  load();
}());
