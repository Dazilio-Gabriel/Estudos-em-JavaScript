const shopName = "loja"; 
const accessToken = "token"; 
const apiVersion = "2025.01";

async function listarProdutos() {
  const url = `futuraURL`;
  //exemplo de url (mas nao tenho uma loja no momento) https://loja.myshopify.com/admin/api/2025-01/products.json

  const response = await fetch(url, {
    headers: { "X-Shopify-Access-Token": accessToken },
  });

  const data = await response.json();
  console.log(data);
}

listarProdutos();