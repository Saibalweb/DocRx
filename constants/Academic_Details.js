const UG_DEGREE = [
{"name":"Bachelor of Medicine, Bachelor of Surgery","label":"MBBS","value":0},
{"name":"Bachelor of Dental Surgery","label":"BDS","value":1},
{"name":"Bachelor of Ayurvedic Medicine and Surgery","label":"BAMS","value":2},
{"name":"Bachelor of Homeopathic Medicine and Surgery","label":"BHMS","value":3},
{"name":"Bachelor of Svaluedha Medicine and Surgery","label":"BSMS","value":4},
{"name":"Bachelor of Unani Medicine and Surgery","label":"BUMS","value":5},
{"name":"Bachelor of Veterinary Science and Animal Husbandry","label":"BVSc & AH","value":6},
{"name":"Bachelor of Physiotherapy","label":"BPT","value":7},
{"name":"Bachelor of Occupational Therapy","label":"BOT","value":8},
{"name":"Bachelor of Naturopathy and Yogic Sciences","label":"BNYS","value":9},
{"name":"Bachelor of Science in Nursing","label":"BSc Nursing","value":10}
];
const PG_DEGREE = [
  {"name":"Doctor of Medicine","label":"MD","value":0},
  {"name":"Master of Surgery","label":"MS","value":1}
];
const PG_SPECIALITY_MD = [
{"name":"General Medicine","label":"General Medicine","value":0},
{"name":"Anatomy","label":"Anatomy","value":1},
{"name":"Physiology","label":"Physiology","value":2},
{"name":"Biochemistry","label":"Biochemistry","value":3},
{"name":"Pathology","label":"Pathology","value":4},
{"name":"Microbiology","label":"Microbiology","value":5},
{"name":"Pharmacology","label":"Pharmacology","value":6},
{"name":"Community Medicine","label":"Community Medicine","value":7},
{"name":"Forensic Medicine","label":"Forensic Medicine","value":8},
{"name":"Dermatology, Venereology and Leprosy","label":"Dermatology, Venereology and Leprosy","value":9},
{"name":"Psychiatry","label":"Psychiatry","value":10},
{"name":"Paediatrics","label":"Paediatrics","value":11},
{"name":"Anaesthesiology","label":"Anaesthesiology","value":12},
{"name":"Radiodiagnosis","label":"Radiodiagnosis","value":13},
{"name":"Radiotherapy","label":"Radiotherapy","value":14},
{"name":"Emergency Medicine","label":"Emergency Medicine","value":15},
{"name":"Immunohematology and Blood Transfusion","label":"Immunohematology and Blood Transfusion","value":16},
{"name":"Hospital Administration","label":"Hospital Administration","value":17},
{"name":"Sports Medicine","label":"Sports Medicine","value":18},
{"name":"Respiratory Medicine","label":"Respiratory Medicine","value":19},
{"name":"Nuclear Medicine","label":"Nuclear Medicine","value":20},
{"name":"Geriatrics","label":"Geriatrics","value":21},
{"name":"Physical Medicine and Rehabilitation","label":"Physical Medicine and Rehabilitation","value":22}
];
const PG_SPECIALITY_MS = [
  {"name":"General Surgery","label":"General Surgery","value":0},
  {"name":"Orthopaedics","label":"Orthopaedics","value":1},
  {"name":"Obstetrics and Gynaecology","label":"Obstetrics and Gynaecology","value":2},
  {"name":"Ophthalmology","label":"Ophthalmology","value":3},
  {"name":"Otorhinolaryngology (ENT)","label":"Otorhinolaryngology (ENT)","value":4},
  {"name":"Plastic Surgery","label":"Plastic Surgery","value":5},
  {"name":"Cardiothoracic Surgery","label":"Cardiothoracic Surgery","value":6},
  {"name":"Neurosurgery","label":"Neurosurgery","value":7},
  {"name":"Paediatric Surgery","label":"Paediatric Surgery","value":8},
  {"name":"Urology","label":"Urology","value":9},
  {"name":"Vascular Surgery","label":"Vascular Surgery","value":10},
  {"name":"Surgical Gastroenterology","label":"Surgical Gastroenterology","value":11},
  {"name":"Surgical Oncology","label":"Surgical Oncology","value":12},
  {"name":"Endocrine Surgery","label":"Endocrine Surgery","value":13}
];
const SUPER_SPECIALITY_DEGREE = [
{"name":"Doctorate of Medicine","label":"DM","value":0},
{"name":"Magister Chirurgiae","label":"MCh","value":1},
{"name":"Fellowship of the National Board","label":"FNB","value":2},
{"name":"Doctorate of National Board","label":"DrNB","value":3}
];
const SUPER_SPECIALITY_DM = [
  { name: "Cardiology", label: "Cardiology", value: 0 },
  { name: "Neurology", label: "Neurology", value: 1 },
  { name: "Endocrinology", label: "Endocrinology", value: 2 },
  { name: "Nephrology", label: "Nephrology", value: 3 },
  { name: "Medical Oncology", label: "Medical Oncology", value: 4 },
  { name: "Gastroenterology", label: "Gastroenterology", value: 5 },
  { name: "Clinical Haematology", label: "Clinical Haematology", value: 6 },
  { name: "Rheumatology", label: "Rheumatology", value: 7 },
  { name: "Pulmonary Medicine", label: "Pulmonary Medicine", value: 8 },
  { name: "Infectious Diseases", label: "Infectious Diseases", value: 9 },
  { name: "Critical Care Medicine", label: "Critical Care Medicine", value: 10 },
  { name: "Hepatology", label: "Hepatology", value: 11 },
  { name: "Paediatric Cardiology", label: "Paediatric Cardiology", value: 12 },
  { name: "Paediatric Neurology", label: "Paediatric Neurology", value: 13 },
  { name: "Paediatric Nephrology", label: "Paediatric Nephrology", value: 14 },
  { name: "Neonatology", label: "Neonatology", value: 15 },
  { name: "Onco-Anaesthesia and Palliative Medicine", label: "Onco-Anaesthesia and Palliative Medicine", value: 16 },
  { name: "Paediatric Gastroenterology", label: "Paediatric Gastroenterology", value: 17 },
  { name: "Cardiac Anaesthesia", label: "Cardiac Anaesthesia", value: 18 },
  { name: "Neuro-Anaesthesia", label: "Neuro-Anaesthesia", value: 19 },
  { name: "Interventional Radiology", label: "Interventional Radiology", value: 20 },
  { name: "Clinical Immunology and Rheumatology", label: "Clinical Immunology and Rheumatology", value: 21 },
  { name: "Virology", label: "Virology", value: 22 },
];
const SUPER_SPECIALITY_MCH = [
    { name: "Cardiothoracic and Vascular Surgery", label: "Cardiothoracic and Vascular Surgery", value: 0 },
    { name: "Neurosurgery", label: "Neurosurgery", value: 1 },
    { name: "Plastic and Reconstructive Surgery", label: "Plastic and Reconstructive Surgery", value: 2 },
    { name: "Urology", label: "Urology", value: 3 },
    { name: "Surgical Gastroenterology", label: "Surgical Gastroenterology", value: 4 },
    { name: "Paediatric Surgery", label: "Paediatric Surgery", value: 5 },
    { name: "Surgical Oncology", label: "Surgical Oncology", value: 6 },
    { name: "Vascular Surgery", label: "Vascular Surgery", value: 7 },
    { name: "Endocrine Surgery", label: "Endocrine Surgery", value: 8 },
    { name: "Gynaecologic Oncology", label: "Gynaecologic Oncology", value: 9 },
    { name: "Hand Surgery", label: "Hand Surgery", value: 10 },
    { name: "Head and Neck Surgery", label: "Head and Neck Surgery", value: 11 },
    { name: "Breast and Endocrine Surgery", label: "Breast and Endocrine Surgery", value: 12 },
    { name: "Hepato-Pancreato-Biliary Surgery", label: "Hepato-Pancreato-Biliary Surgery", value: 13 },
    { name: "Minimal Access Surgery", label: "Minimal Access Surgery", value: 14 },
  ];

export { UG_DEGREE, PG_DEGREE, PG_SPECIALITY_MD, PG_SPECIALITY_MS,SUPER_SPECIALITY_DEGREE,SUPER_SPECIALITY_DM,SUPER_SPECIALITY_MCH };
