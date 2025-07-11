# How to Add or Edit Product Descriptions

Each product in `mesh_products` and `blinds_products` can have its own description. To add or edit a product's description:

1. Open `src/productData.js`.
2. For each product object, add or update the `description` field as an object with key-value pairs. Example:

```
{
  title: 'Pleated Mesh Door',
  folder: 'pleated-mesh-door',
  mainImage: require('./mesh_products/pleated-mesh-door/main.jpg'),
  images: [
    require('./mesh_products/pleated-mesh-door/1.jpg'),
    require('./mesh_products/pleated-mesh-door/2.jpg'),
    require('./mesh_products/pleated-mesh-door/3.jpg'),
  ],
  description: {
    "Usage/Application": "All Type Of Indoors",
    "Material": "Fiber Mesh and Aluminium Frame",
    "Suitable For": "All Usages",
    "Type": "Foldable",
    "Color": "All Colours",
    "Brand": "HanumanScreens"
  }
}
```

- You can use any keys and values you want for each product.
- If a product does not have a `description` field, no details will be shown for that product.
- You can copy the `description` object from another product and modify as needed.

**Tip:**
- Keep the `description` field as an object with string keys and values for best results.
- You can add, remove, or rename keys as needed for each product.

---

For further customization, edit the rendering logic in `src/pages/ProductDetail.js`.
