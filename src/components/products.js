const laptops = {
  msi: [
    {
      id: '0',
      name: 'MSI GS75 Stealth',
      text: 'Монитор — 17.3" FHD (1920×1080) IPS, 144Гц\n'
          + 'Процессор — Intel Core i7-9750H (2.6 GHz, 4.5 GHz, 9 MB cache)\n'
          + 'Оперативная память — 16GB (SO-DIMM DDR4, 2666MHz, 2×8GB)\n'
          + 'Накопители — 256GB SSD M.2 PCIe\n'
          + 'Видеокарта — GeForce GTX 1660Ti 6GB GDDR6\n'
          + 'Операционная система — NO OS (лицензионный Windows 10 Home, +3000 грн.)\n'
          + 'Клавиатура — US, английская (оригинальная лазерная гравировка, +300 грн.)\n'
          + 'Вес — 2.25 кг.\n'
          + 'Гарантия — 1 год',
    },
    {
      id: '1',
      name: 'MSI GS65 Stealth',
      text: 'Монитор — 15.6″ FHD (1920×1080) IPS\n'
          + 'Процессор — Intel Core i7-9750H (2.6 GHz, 4.5 GHz, 9 MB cache)\n'
          + 'Оперативная память — 16GB (SO-DIMM DDR4, 2666MHz, 2×8GB)\n'
          + 'Жесткий диск — 1TB SSD M.2 PCIe\n'
          + 'Видеокарта — GeForce RTX 2070 Max-Q 8GB GDDR6\n'
          + 'Операционная система — NO OS (лицензионный Windows 10 Home, +3000 грн.)\n'
          + 'Клавиатура — US, английская (оригинальная лазерная гравировка, +300 грн.)\n'
          + 'Вес — 1.9 кг.\n'
          + 'Гарантия — 1 год',
    },
    {
      id: '2',
      name: 'MSI Gl73',
      text: 'Монитор — 17.3” FHD (1920×1080)\n'
          + 'Процессор — Intel Core i7-9750H (2.6 GHz, 4.5 GHz, 9 MB cache)\n'
          + 'Оперативная память — 8GB (SO-DIMM DDR4, 2666MHz, 1×8GB)\n'
          + 'Накопители — 1TB HDD SATA 7200\n'
          + 'Видеокарта — NVIDIA GeForce RTX 2060 6GB GDDR6\n'
          + 'Операционная система — NO OS (лицензионный Windows 10 Home, +3000 грн.)\n'
          + 'Клавиатура — US, английская (оригинальная лазерная гравировка, +300 грн.)\n'
          + 'Вес — 2.9 кг.\n'
          + 'Гарантия — 1 год',
    },
  ],
  asus: [
    {
      id: '0',
      name: 'ASUS Strix',
      text: 'Монитор — 17.3” FHD (1920×1080) EWV, 144Hz\n'
          + 'Процессор — Intel Core i7-9750H (2.6 GHz, 4.5 GHz, 9 MB cache)\n'
          + 'Оперативная память — 16GB (SO-DIMM DDR4, 2666MHz, 1×16GB)\n'
          + 'Накопители — 512GB SSD M.2 PCIe\n'
          + 'Видеокарта — NVIDIA GeForce RTX 2060 6GB GDDR6\n'
          + 'Операционная система — Windows 10 Home (лицензионная, мультиязычная)\n'
          + 'Клавиатура — US, английская (оригинальная лазерная гравировка, +300 грн.)\n'
          + 'Вес — 2.7 кг.\n'
          + 'Гарантия — 1 год',
    },
    {
      id: '1',
      name: 'ASUS ROG Gaming',
      text: 'Монитор — 15.6” FHD (1920×1080), EWV\n'
          + 'Процессор — Intel Core i5-9300H (2.4 GHz, 4.1 GHz, 8MB cache)\n'
          + 'Оперативная память — 8GB (SO-DIMM DDR4, 2666MHz, 1×8GB)\n'
          + 'Накопители — 512GB SSD M.2 PCIe\n'
          + 'Видеокарта — NVIDIA GeForce GTX 1650 4GB GDDR5\n'
          + 'Операционная система — Windows 10 Home (лицензионная, мультиязычная)\n'
          + 'Клавиатура — US, английская (оригинальная лазерная гравировка, +300 грн.)\n'
          + 'Вес — 2.4 кг.\n'
          + 'Гарантия — 1 год',
    },
    {
      id: '2',
      name: 'ASUS TUF Gaming',
      text: 'Монитор — 17.3” FHD (1920×1080) IPS\n'
          + 'Процессор — AMD Ryzen 7 3750H (2.3 GHz, 4.0 GHz)\n'
          + 'Оперативная память — 8GB (SO-DIMM DDR4, 2666MHz, 1×8GB)\n'
          + 'Накопители — 512GB SSD M.2 PCIe\n'
          + 'Видеокарта — NVIDIA GeForce GTX 1650 4GB GDDR5\n'
          + 'Операционная система — Windows 10 Home (лицензионная, мультиязычная)\n'
          + 'Клавиатура — US, английская (оригинальная лазерная гравировка, +300 грн.)\n'
          + 'Вес — 2.7 кг.\n'
          + 'Гарантия — 1 год',
    },
  ],
  all() { return ['msi', 'asus']; },
  allProducts(key) { return laptops[key]; },
  get(key, id) {
    return laptops[key][id];
  },
};

export default laptops;