function calculateFinalPrice() {
    let buyPrice = parseFloat(document.getElementById('buyPrice').value) || 0;
    let gst = parseFloat(document.getElementById('gst').value) || 0;
    let packaging = parseFloat(document.getElementById('packaging').value) || 0;
    let transport = parseFloat(document.getElementById('transport').value) || 0;
    let profit = parseFloat(document.getElementById('profit').value) || 0;
    
    let basePrice = buyPrice + packaging + transport;
    let gstAmount = (basePrice * gst) / 100;
    let finalPrice = basePrice + gstAmount + profit;
    
    document.getElementById('finalPrice').innerText = finalPrice.toFixed(2);
}