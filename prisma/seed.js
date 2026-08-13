const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('⏳ Seeding database via JavaScript...');

  // 1. Clean existing data
  await prisma.product_variants.deleteMany({});
  await prisma.product_images.deleteMany({});
  await prisma.products.deleteMany({});

  // 2. Mock Data for your specific clothing categories
  const initialProducts = [
    {
      name: 'Heavyweight Boxy Tee',
      slug: 'heavyweight-boxy-tee',
      description: '100% organic cotton 300gsm oversized black streetwear tee.',
      price: 45.00,
      category: 'shirts',
      images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500'],
      variants: [{ size: 'S', stock_quantity: 10 }, { size: 'M', stock_quantity: 20 }, { size: 'L', stock_quantity: 15 }]
    },
    {
      name: 'Ribbed Fisherman Beanie',
      slug: 'ribbed-fisherman-beanie',
      description: 'Tight-knit cropped fit beanie in slate gray.',
      price: 25.00,
      category: 'beanies',
      images: ['https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500'],
      variants: [{ size: 'OS', stock_quantity: 50 }]
    },
    {
      name: 'Distressed Skully Cap',
      slug: 'distressed-skully-cap',
      description: 'Frayed-edge raw aesthetic skully knit.',
      price: 30.00,
      category: 'skullies',
      images: ['https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500'],
      variants: [{ size: 'OS', stock_quantity: 35 }]
    },
    {
      name: 'Cuban Link Choker Chain',
      slug: 'cuban-link-choker',
      description: '925 Sterling Silver 12mm heavy Cuban chain.',
      price: 110.00,
      category: 'chains',
      images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500'],
      variants: [{ size: 'OS', stock_quantity: 12 }]
    }
  ];

  for (const item of initialProducts) {
    const product = await prisma.products.create({
      data: {
        name: item.name,
        slug: item.slug,
        description: item.description,
        price: item.price,
        category: item.category,
      },
    });

    // Seed images
    for (const imgUrl of item.images) {
      await prisma.product_images.create({
        data: {
          product_id: product.id,
          url: imgUrl,
          is_alt_lookbook: false
        }
      });
    }

    // Seed variants
    for (const v of item.variants) {
      await prisma.product_variants.create({
        data: {
          product_id: product.id,
          size: v.size,
          stock_quantity: v.stock_quantity
        }
      });
    }
  }

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });