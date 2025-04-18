export async function GET(req) {
    return new Response(JSON.stringify([
      { id: 1, name: 'Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8fDA%3D', price: 29.99 },
      { id: 2, name: 'Shoes', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D', price: 49.99 },
      { id: 3, name: 'Hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF0fGVufDB8fDB8fHww', price: 19.99 }
    ]), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }