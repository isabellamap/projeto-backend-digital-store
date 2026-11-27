const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const ProductImage = require('./ProductImage');
const ProductOption = require('./ProductOption');
const ProductCategory = require('./ProductCategory');

// Um produto pode ter várias imagens
Product.hasMany(ProductImage, {
    foreignKey: 'product_id'
});

ProductImage.belongsTo(Product, {
    foreignKey: 'product_id'
});

// Um produto pode ter várias opções
Product.hasMany(ProductOption, {
    foreignKey: 'product_id'
});

ProductOption.belongsTo(Product, {
    foreignKey: 'product_id'
});

// Um produto pode estar em várias categorias
Product.belongsToMany(Category, {
    through: ProductCategory,
    foreignKey: 'product_id',
    otherKey: 'category_id'
});

// Uma categoria pode ter vários produtos
Category.belongsToMany(Product, {
    through: ProductCategory,
    foreignKey: 'category_id',
    otherKey: 'product_id'
});

// Exporta os modelos
module.exports = {
    User,
    Category,
    Product,
    ProductImage,
    ProductOption,
    ProductCategory
};
