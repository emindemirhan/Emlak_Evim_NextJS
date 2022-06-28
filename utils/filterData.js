export const filterData = [
  {
    items: [
      { name: 'Satın Al', value: 'for-sale' },
      { name: 'Kirala', value: 'for-rent' },
    ],
    placeholder: 'Ne Yapmak İstersin',
    queryName: 'purpose',
  },
  {
    items: [
      { name: 'Günlük', value: 'daily' },
      { name: 'Haftalık', value: 'weekly' },
      { name: 'Aylık', value: 'monthly' },
      { name: 'Yılık', value: 'yearly' },
    ],
    placeholder: 'Kiralama Süre Periyodu',
    queryName: 'rentFrequency',
  },
  {
    items: [
      { name: '10,000', value: '10000' },
      { name: '20,000', value: '20000' },
      { name: '30,000', value: '30000' },
      { name: '40,000', value: '40000' },
      { name: '50,000', value: '50000' },
      { name: '60,000', value: '60000' },
      { name: '85,000', value: '85000' },
    ],
    placeholder: 'En Düşük Fiyat (AED)',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: '50,000', value: '50000' },
      { name: '60,000', value: '60000' },
      { name: '85,000', value: '85000' },
      { name: '110,000', value: '110000' },
      { name: '135,000', value: '135000' },
      { name: '160,000', value: '160000' },
      { name: '185,000', value: '185000' },
      { name: '200,000', value: '200000' },
      { name: '300,000', value: '300000' },
      { name: '400,000', value: '400000' },
      { name: '500,000', value: '500000' },
      { name: '600,000', value: '600000' },
      { name: '700,000', value: '700000' },
      { name: '800,000', value: '800000' },
      { name: '900,000', value: '900000' },
      { name: '1000,000', value: '1000000' },
    ],
    placeholder: 'En Yüksek Fiyat(AED)',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: 'En Düşük Fiyat', value: 'price-asc' },
      { name: 'En Yüksek Fiyat', value: 'price-des' },
      { name: 'En Yenisi', value: 'date-asc' },
      { name: 'En Eskisi', value: 'date-desc' },
      { name: 'Onaylanmış', value: 'verified-score' },
      { name: 'Şehir Güven Skoru', value: 'city-level-score' },
    ],
    placeholder: 'Sırala',
    queryName: 'sort',
  },
  {
    items: [
      { name: '1000', value: '1000' },
      { name: '2000', value: '2000' },
      { name: '3000', value: '3000' },
      { name: '4000', value: '4000' },
      { name: '5000', value: '5000' },
      { name: '10000', value: '10000' },
      { name: '20000', value: '20000' },
    ],
    placeholder: 'En Fazla Büyüklük(sqft)',
    queryName: 'areaMax',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
    ],
    placeholder: 'Odalar',
    queryName: 'roomsMin',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
    ],
    placeholder: 'Banyolar',
    queryName: 'bathsMin',
  },
  {
    items: [
      { name: 'Eşyalı', value: 'furnished' },
      { name: 'Eşyasız', value: 'unfurnished' },
    ],
    placeholder: 'Daire İçi',
    queryName: 'furnishingStatus',
  },
  {
    items: [
      { name: 'Daire', value: '4' },
      { name: 'Kasaba Evi', value: '16' },
      { name: 'Villalar', value: '3' },
      { name: 'Pent Evleri', value: '18' },
      { name: 'Otel Dairesi', value: '21' },
      { name: 'Villa Yapısı', value: '19' },
      { name: 'Residans', value: '14' },
      { name: 'Residans Oda', value: '12' },
      { name: 'Residans Bina', value: '17' },
    ],
    placeholder: 'Mülk tipi',
    queryName: 'categoryExternalID',
  },
];

export const getFilterValues = (filterValues) => {
  const {
    purpose,
    rentFrequency,
    categoryExternalID,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    locationExternalIDs,
  } = filterValues;

  const values = [
    {
      name: 'Ne Yapmak İstersiniz?',
      value: purpose,
    },
    {
      name: 'Kiralama Süre Periyodu',
      value: rentFrequency,
    },
    {
      name: 'En Düşük Fiyat',
      value: minPrice,
    },
    {
      name: 'En Yüksek Fiyat',
      value: maxPrice,
    },
    {
      name: 'En Fazla Büyüklük',
      value: areaMax,
    },
    {
      name: 'Min Oda Sayısı',
      value: roomsMin,
    },
    {
      name: 'Min Banyo Sayısı',
      value: bathsMin,
    },
    {
      name: 'Sıralama',
      value: sort,
    },
    {
      name: 'locationExternalIDs',
      value: locationExternalIDs,
    },
    {
      name: 'categoryExternalID',
      value: categoryExternalID,
    },
  ];

  return values;
};