 const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

    const tbody = document.getElementById('order-body');
    let total = 0;

    orderItems.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
      `;
      tbody.appendChild(tr);
      total += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;