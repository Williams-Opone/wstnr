-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'SUCCESSFUL', 'FAILED');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "category" TEXT NOT NULL,
    "composition" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "measurements" TEXT NOT NULL,
    "images" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSku" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 10,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductSku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    "totalAmount" DECIMAL(10,2) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productSkuId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "pricePaid" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_serial_key" ON "Product"("serial");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSku_productId_color_size_key" ON "ProductSku"("productId", "color", "size");

-- CreateIndex
CREATE UNIQUE INDEX "Order_reference_key" ON "Order"("reference");

-- AddForeignKey
ALTER TABLE "ProductSku" ADD CONSTRAINT "ProductSku_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productSkuId_fkey" FOREIGN KEY ("productSkuId") REFERENCES "ProductSku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
