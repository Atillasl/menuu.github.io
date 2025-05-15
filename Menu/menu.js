 const selectedItems = [];

    document.querySelectorAll('.item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('selected');

        const name = item.dataset.name;
        const price = parseFloat(item.dataset.price);

        const existing = selectedItems.find(i => i.name === name);
        if (existing) {
          const index = selectedItems.indexOf(existing);
          selectedItems.splice(index, 1);
        } else {
          selectedItems.push({ name, price, quantity: 1 });
        }
      });
    });

    function sendOrder() {
      localStorage.setItem('orderItems', JSON.stringify(selectedItems));
      window.location.href = 'order.html';
    }