document.getElementById("submitProduct").onclick= submitProduct;

function submitProduct(){
    const product=document.getElementById("pn").value;
    const name=document.getElementById("name").value;
    const unitPrice=document.getElementById("unit-price").value;
    const quanittyStock=document.getElementById("quantity-stock").value;
    const productOption=document.getElementById("cars").value;
    const supplyDate=document.getElementById("date").value;
    alert(product + " \n"+
    name+ "\n"+
    unitPrice+ "\n"+
   quanittyStock
    +"\n"+
    productOption+"\n"+
    supplyDate)
}