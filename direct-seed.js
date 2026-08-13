const postgres = require("postgres");
require("dotenv").config();

const sql = postgres(process.env.DATABASE_URL);

async function seed() {
  console.log("⏳ Flushing existing rows and injecting streetwear data arrays...");
  try {
    // Clean old data rows safely
    await sql`DELETE FROM product_variants`;
    await sql`DELETE FROM product_images`;
    await sql`DELETE FROM products`;

    // 1. Insert core products
    const products = await sql`
      INSERT INTO products (name, slug, description, price, category) VALUES
      ('Heavyweight Boxy Tee', 'heavyweight-boxy-tee', '100% organic cotton 300gsm oversized black streetwear tee.', 45.00, 'shirts'),
      ('Ribbed Fisherman Beanie', 'ribbed-fisherman-beanie', 'Tight-knit cropped fit beanie in slate gray.', 25.00, 'beanies'),
      ('Distressed Skully Cap', 'distressed-skully-cap', 'Frayed-edge raw aesthetic skully knit.', 30.00, 'skullies'),
      ('Cuban Link Choker Chain', 'cuban-link-choker', '925 Sterling Silver 12mm heavy Cuban chain.', 110.00, 'chains')
      RETURNING id, name, category;
    `;

    // 2. Map structural high-contrast lookbook media assets
    const images = {
      'shirts': 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600',
      'beanies': 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600',
      'skullies': 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600',
      'chains': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600'
    };

    for (const p of products) {
      await sql`
        INSERT INTO product_images (product_id, url, is_alt_lookbook)
        VALUES (${p.id}, ${images[p.category]}, false)
      `;
      
      const size = p.category === 'shirts' ? 'M' : 'OS';
      await sql`
        INSERT INTO product_variants (product_id, size, stock_quantity)
        VALUES (${p.id}, ${size}, 50)
      `;
    }

    console.log("✅ Database data mapping successful! Shop items are live.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}

seed();