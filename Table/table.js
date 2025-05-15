document.querySelectorAll('.table').forEach((table) => {
  table.addEventListener('click', function (e) {
    // Cancel düyməsinə klik olunubsa
    if (e.target.classList.contains('cancel-btn')) {
      this.setAttribute('data-status', 'available'); // Masa boş olur
      this.classList.remove('reserved'); // 'reserved' sinifi silinir

      // "Masa doludu" və "Rezerved" yazılarını silirik
      const statusText = this.querySelector('.status-text');
      if (statusText) statusText.remove(); // Status yazısını silirik

      // Cancel düyməsini silirik
      const cancelBtn = this.querySelector('.cancel-btn');
      if (cancelBtn) cancelBtn.remove(); // Cancel düyməsi silinir

      // "Sifariş ver" düyməsini silirik
      const orderBtn = this.querySelector('.order-btn');
      if (orderBtn) orderBtn.remove(); // "Sifariş ver" düyməsini silirik

      // "Masa boşdur" yazısını əlavə et
      

      return;
    }

    // Əgər masa artıq doludursa, heç nə etmə
    if (this.getAttribute('data-status') === 'reserved') return;

    // Masa dolu edilib
    this.setAttribute('data-status', 'reserved'); // Masa rezerv edilir
    this.classList.add('reserved'); // 'reserved' sinifi əlavə edilir

    // "Rezerved" yazısını əlavə et
    if (!this.querySelector('.status-text')) {
      const statusText = document.createElement('div');
      statusText.classList.add('status-text');
      statusText.textContent = 'Rezerved'; // "Rezerved" yazısı
      this.appendChild(statusText); // Masanın üzərinə "Rezerved" yazısını əlavə et
    }

    // "Sifariş ver" düyməsini əlavə et
    if (!this.querySelector('.order-btn')) {
      const orderButton = document.createElement('button');
      orderButton.classList.add('order-btn');
      orderButton.textContent = 'Sifariş ver'; // "Sifariş ver" yazısı
      this.appendChild(orderButton); // "Sifariş ver" düyməsini masaya əlavə et
    }

    // Cancel düyməsini yaradıb əlavə et
    if (!this.querySelector('.cancel-btn')) {
      const cancelButton = document.createElement('button');
      cancelButton.classList.add('cancel-btn');
      cancelButton.textContent = 'Ləğv et'; // "Ləğv et" yazısı
      this.appendChild(cancelButton); // "Ləğv et" düyməsini masaya əlavə et
    }

    // "Sifariş ver" düyməsinə klik olunduqda "Masa doludu" yazısı əlavə olunsun
    const orderButton = this.querySelector('.order-btn');
    orderButton.addEventListener('click', function() {
      const statusText = table.querySelector('.status-text');
      if (statusText) statusText.remove(); // "Rezerved" yazısını silirik

      const doluduText = document.createElement('div');
      doluduText.classList.add('status-text');
      doluduText.textContent = 'Masa doludu'; // "Masa doludu" yazısı
      table.appendChild(doluduText); // "Masa doludu" yazısını masaya əlavə et
    });
  });
});
orderButton.addEventListener('click', function () {
  // Əgər "Masa boşdur" yazısı varsa, onu sil
 

  // Əgər artıq "Rezerved" və ya "Masa doludu" yazısı varsa, onu da sil
  const statusText = table.querySelector('.status-text');
  if (statusText) statusText.remove();

  // Yeni "Masa doludu" yazısını əlavə et
  const doluduText = document.createElement('div');
  doluduText.classList.add('status-text');
  doluduText.textContent = 'Masa doludu';
  table.appendChild(doluduText);
});
// "Sifariş ver" düyməsinə klik olunduqda
orderButton.addEventListener('click', function () {
  // Əvvəlki status yazılarını sil
  const emptyText = table.querySelector('.empty-text');
  if (emptyText) emptyText.remove();

  const statusText = table.querySelector('.status-text');
  if (statusText) statusText.remove();

  // Yeni "Masa doludu" yazısını əlavə et
  const doluduText = document.createElement('div');
  doluduText.classList.add('status-text');
  doluduText.textContent = 'Masa doludu';
  table.appendChild(doluduText);
});
// "Sifariş ver" düyməsinə klik edəndə
orderButton.addEventListener('click', function () {
  // Hər halda "Masa boşdur" yazısını sil
  

  // Əvvəlki "Masa doludu" və ya "Rezerved" yazısını da sil
  const statusText = table.querySelector('.status-text');
  if (statusText) statusText.remove();

  // "Masa doludu" yazısını əlavə et
  const doluduText = document.createElement('div');
  doluduText.classList.add('status-text');
  doluduText.textContent = 'Masa doludu';
  table.appendChild(doluduText);
});
