// Apna Local Mart — marketplace logic and product data
const stateProducts = {
      "Bihar": [
        {
          name: "MADHUBNI PAINTING",
          img: "WhatsApp Image 2025-10-26 at 10.19.45 PM.jpeg",
          price: "₹1,200",
          artisans: [
            { name: "Sita Devi", contact: "+91 98234 56789", story: "A veteran painter from Madhubani known for her depictions of Radha-Krishna and nature scenes." },
            { name: "Manisha Kumari", contact: "+91 98234 11111", story: "A young artist keeping Mithila art alive using natural colors from plants." },
            { name: "Reena Kumari", contact: "+91 98234 22222", story: "Reena teaches Madhubani painting to rural girls, empowering local artisans." },
            { name: "Lalita Devi", contact: "+91 98234 33333", story: "Expert in intricate border designs using bamboo sticks as brushes." },
            { name: "Kusum Das", contact: "+91 98234 44444", story: "Specializes in Madhubani paintings on handmade paper and silk fabric." }
          ]
        },
        {
          name: "MANJUSHA ART",
          img: "WhatsApp Image 2025-10-26 at 10.21.50 PM.jpeg",
          price: "₹250",
          artisans: [
            { name: "Sunil Prajapati", contact: "+91 98765 43210", story: "Third-generation potter from Rajgir, known for his eco-friendly designs." },
            { name: "Ravi Kumar", contact: "+91 98765 11111", story: "Focuses on modern terracotta shapes while preserving traditional firing methods." },
            { name: "Vinod Prajapati", contact: "+91 98765 22222", story: "Creates miniature terracotta sets loved by tourists." },
            { name: "Kamal Das", contact: "+91 98765 33333", story: "Blends painting and pottery to make decorative terracotta pieces." },
            { name: "Deepak Yadav", contact: "+91 98765 44444", story: "Leads a small team of rural youth trained in sustainable clay work." }
          ]
        },
        {
          name: "TIKULI ART",
          img: "WhatsApp Image 2025-10-26 at 10.24.16 PM.jpeg",
          price: "₹350",
          artisans: [
            { name: "Rekha Devi", contact: "+91 91234 56780", story: "Master weaver from Darbhanga creating fine golden Sikki baskets." },
            { name: "Pinki Devi", contact: "+91 91234 11111", story: "Trains women in her village to craft eco-friendly household items." },
            { name: "Suman Kumari", contact: "+91 91234 22222", story: "Innovates modern patterns using age-old weaving techniques." },
            { name: "Gita Kumari", contact: "+91 91234 33333", story: "Introduced colorful Sikki baskets now popular in fairs." },
            { name: "Rina Devi", contact: "+91 91234 44444", story: "Her baskets are exported through local cooperatives." }
          ]
        },
        {
          name: "SUJANI EMBROIDERY",
          img: "WhatsApp Image 2025-10-26 at 10.24.16 PM.jpeg",
          price: "₹450",
          artisans: [
            { name: "Anita Kumari", contact: "+91 90123 45678", story: "Creates intricate lac bangles with mirror work — a symbol of traditional Bihari grace." },
            { name: "Pooja Devi", contact: "+91 90123 11111", story: "Adds a modern touch to traditional lac jewellery designs." },
            { name: "Meena Kumari", contact: "+91 90123 22222", story: "Known for vibrant color combinations and festival bangles." },
            { name: "Renu Devi", contact: "+91 90123 33333", story: "Crafts customized lac ornaments for weddings and occasions." },
            { name: "Kiran Sinha", contact: "+91 90123 44444", story: "Trains rural women artisans in Patna district." }
          ]
        },
        {
          name: "KHATWA EMBROIDERY",
          img: "WhatsApp Image 2025-10-26 at 10.30.57 PM.jpeg",
          price: "₹300",
          artisans: [
            { name: "Radha Devi", contact: "+91 90345 67891", story: "Blends vibrant fabrics and patterns, bringing Bihar’s heritage into modern homes." },
            { name: "Savita Kumari", contact: "+91 90345 11111", story: "Creates intricate applique work for festive textiles." },
            { name: "Lata Devi", contact: "+91 90345 22222", story: "Transforms plain cloth into colorful wall hangings and cushion covers." },
            { name: "Kanchan Kumari", contact: "+91 90345 33333", story: "Known for geometric patchwork designs inspired by Mithila motifs." },
            { name: "Asha Devi", contact: "+91 90345 44444", story: "Supports self-help groups producing applique home décor." }
          ]
        },
        {
          name: "PATNA KALAM",
          img: "WhatsApp Image 2025-10-26 at 10.33.04 PM.jpeg",
          price: "₹900",
          artisans: [
            { name: "Ramesh Kumar", contact: "+91 95432 87654", story: "Carves idols from Gaya’s local stone — a skill passed down through generations." },
            { name: "Mahesh Das", contact: "+91 95432 11111", story: "Known for fine detailing in Buddhist sculptures." },
            { name: "Rajiv Kumar", contact: "+91 95432 22222", story: "Creates miniature stone carvings for home decor." },
            { name: "Narendra Yadav", contact: "+91 95432 33333", story: "Expert in polishing and antique finishing." },
            { name: "Dinesh Prajapati", contact: "+91 95432 44444", story: "His idols are exhibited in Gaya’s annual crafts fair." }
          ]
        },
        {
          name: "BAMBOO CRAFT",
          img: "WhatsApp Image 2025-10-26 at 10.34.50 PM.jpeg",
          price: "₹200",
          artisans: [
            { name: "Pooja Singh", contact: "+91 99876 54321", story: "Creates eco-friendly bamboo crafts promoting sustainable artistry." },
            { name: "Rajesh Kumar", contact: "+91 99876 11111", story: "Specializes in bamboo furniture and accessories." },
            { name: "Neha Devi", contact: "+91 99876 22222", story: "Focuses on colorful bamboo baskets and pen holders." },
            { name: "Suresh Yadav", contact: "+91 99876 33333", story: "Known for traditional bamboo fish traps and mats." },
            { name: "Kajal Kumari", contact: "+91 99876 44444", story: "Blends design innovation with eco-friendly craftsmanship." }
          ]
        },
        {
          name: "BHAGALPURI SILK SAREE",
          img: "WhatsApp Image 2025-10-26 at 10.38.36 PM.jpeg",
          price: "₹1,500",
          artisans: [
            { name: "Meena Devi", contact: "+91 97456 12345", story: "Weaves soft Maithili shawls from pure cotton, preserving Bihar’s textile heritage." },
            { name: "Anju Kumari", contact: "+91 97456 11111", story: "Produces natural-dyed handloom shawls admired for elegance." },
            { name: "Sunita Devi", contact: "+91 97456 22222", story: "Combines modern design with traditional weaving patterns." },
            { name: "Pushpa Kumari", contact: "+91 97456 33333", story: "Empowers local women through handloom cooperatives." },
            { name: "Kavita Devi", contact: "+91 97456 44444", story: "Specializes in embroidery over woven shawls for export markets." }
          ]
        }
      ],
      "Kerala": [
        {
          name: "Kathakali Makeup Kits",
          img: "WhatsApp Image 2025-10-26 at 11.09.01 PM.jpeg",
          price: "₹1,000",
          artisans: [
            { name: "Ramachandran Nair", contact: "+91 98470 12345", story: "Expert in creating traditional Kathakali face paints and training performers." },
            { name: "Leela Menon", contact: "+91 98470 11111", story: "Specializes in natural pigment preparation for classical dance." },
            { name: "Suresh Pillai", contact: "+91 98470 22222", story: "Crafts makeup kits used in Kathakali schools across Kerala." },
            { name: "Anitha Kumari", contact: "+91 98470 33333", story: "Trains local youth in artistic facial design techniques." },
            { name: "Mohan Das", contact: "+91 98470 44444", story: "Preserves traditional Kathakali look through his makeup kits." }
          ]
        },
        {
          name: "Aranmula Mirror",
          img: "WhatsApp Image 2025-10-26 at 11.10.23 PM.jpeg",
          price: "₹2,500",
          artisans: [
            { name: "Rajeev Kumar", contact: "+91 98460 56789", story: "Crafts the famous Aranmula metal mirrors using centuries-old techniques." },
            { name: "Sreeja Nair", contact: "+91 98460 11111", story: "Expert in polishing and etching traditional designs on mirrors." },
            { name: "Vijay Das", contact: "+91 98460 22222", story: "Continues the family tradition of Aranmula mirror making." },
            { name: "Anand Kumar", contact: "+91 98460 33333", story: "Teaches local artisans the precision in metal casting." },
            { name: "Lekshmi Devi", contact: "+91 98460 44444", story: "Combines modern designs with traditional Aranmula artistry." }
          ]
        },
        {
          name: "Nettipattam (Elephant Caparison)",
          img: "WhatsApp Image 2025-10-26 at 11.18.57 PM.jpeg",
          price: "₹3,500",
          artisans: [
            { name: "Shaji Kumar", contact: "+91 98471 56789", story: "Crafts ornamental golden nets for elephants during temple festivals." },
            { name: "Ravi Menon", contact: "+91 98471 11111", story: "Known for intricate embossing and embroidery on Nettipattam." },
            { name: "Akhila Devi", contact: "+91 98471 22222", story: "Maintains family tradition of caparison crafting in Thrissur." },
            { name: "Thomas Varghese", contact: "+91 98471 33333", story: "Combines contemporary motifs with traditional temple designs." },
            { name: "Bindu Kumar", contact: "+91 98471 44444", story: "Trains younger artisans in caparison making techniques." }
          ]
        },
        {
          name: "Cochin Embroidery",
          img: "WhatsApp Image 2025-10-26 at 11.21.39 PM.jpeg",
          price: "₹700",
          artisans: [
            { name: "Rekha Menon", contact: "+91 98472 56789", story: "Specializes in hand-embroidered fabrics with gold and silver threads." },
            { name: "Anitha Nair", contact: "+91 98472 11111", story: "Creates modern designs inspired by Cochin’s colonial era." },
            { name: "Leela Kumari", contact: "+91 98472 22222", story: "Her embroidery is used in sarees and home decor." },
            { name: "Suresh Kumar", contact: "+91 98472 33333", story: "Known for delicate, fine stitches on silk and cotton fabrics." },
            { name: "Rajini Devi", contact: "+91 98472 44444", story: "Trains rural women in sustainable embroidery techniques." }
          ]
        },
        {
          name: "Bekal Fort Terracotta",
          img: "WhatsApp Image 2025-10-26 at 11.32.35 PM.jpeg",
          price: "₹900",
          artisans: [
            { name: "Ramesh Kumar", contact: "+91 98473 56789", story: "Creates miniature terracotta replicas of Kerala’s Bekal Fort." },
            { name: "Anil Das", contact: "+91 98473 11111", story: "Focuses on fine detailing and traditional firing techniques." },
            { name: "Lekha Kumari", contact: "+91 98473 22222", story: "Adds decorative painting to terracotta pieces." },
            { name: "Sajan Menon", contact: "+91 98473 33333", story: "Blends traditional clay craft with modern decor needs." },
            { name: "Bindu Devi", contact: "+91 98473 44444", story: "Her terracotta work is featured in local craft exhibitions." }
          ]
        },
        {
          name: "Kathakali Dolls",
          img: "WhatsApp Image 2025-10-26 at 11.12.42 PM.jpeg",
          price: "₹1,200",
          artisans: [
            { name: "Ravi Kumar", contact: "+91 98474 56789", story: "Crafts detailed Kathakali figurines for collectors and schools." },
            { name: "Sreeja Devi", contact: "+91 98474 11111", story: "Known for painting vibrant traditional costumes on dolls." },
            { name: "Thomas Kurian", contact: "+91 98474 22222", story: "Makes dolls using eco-friendly clay and paints." },
            { name: "Anitha Pillai", contact: "+91 98474 33333", story: "Trains artisans in miniature doll-making techniques." },
            { name: "Shaji Das", contact: "+91 98474 44444", story: "Adds delicate jewelry and props to Kathakali dolls." }
          ]
        },
        {
          name: "Coir Products",
          img: "WhatsApp Image 2025-10-26 at 11.13.51 PM.jpeg",
          price: "₹500",
          artisans: [
            { name: "Jose Kumar", contact: "+91 98475 56789", story: "Produces handmade mats, ropes, and baskets from coir fiber." },
            { name: "Anitha Menon", contact: "+91 98475 11111", story: "Specializes in eco-friendly coir home décor products." },
            { name: "Suresh Das", contact: "+91 98475 22222", story: "Works with traditional weaving methods of Kerala coir craft." },
            { name: "Leela Kumari", contact: "+91 98475 33333", story: "Combines modern design ideas with traditional coir making." },
            { name: "Ravi Nair", contact: "+91 98475 44444", story: "Supports local cooperative societies producing coir products." }
          ]
        },
        {
          name: "Snake Boat Miniatures",
          img: "WhatsApp Image 2025-10-26 at 11.17.14 PM.jpeg",
          price: "₹800",
          artisans: [
            { name: "Krishna Kumar", contact: "+91 98476 56789", story: "Crafts miniature snake boats inspired by Kerala’s boat races." },
            { name: "Leela Menon", contact: "+91 98476 11111", story: "Focuses on intricate hand-painted details on miniatures." },
            { name: "Ravi Das", contact: "+91 98476 22222", story: "Uses traditional wood carving techniques for mini boats." },
            { name: "Anitha Kumar", contact: "+91 98476 33333", story: "Blends authenticity with decorative aesthetics." },
            { name: "Suresh Menon", contact: "+91 98476 44444", story: "Trains local youth in mini snake boat craftsmanship." }
          ]
        },
        {
          name: "Palm Leaf Art",
          img: "WhatsApp Image 2025-10-26 at 11.15.36 PM.jpeg",
          price: "₹1,000",
          artisans: [
            { name: "Rajesh Kumar", contact: "+91 98477 56789", story: "Engraves traditional Kerala motifs on dried palm leaves." },
            { name: "Anitha Devi", contact: "+91 98477 11111", story: "Preserves ancient storytelling techniques through palm leaf art." },
            { name: "Leela Kumari", contact: "+91 98477 22222", story: "Adds colors and finishing touches to palm leaf manuscripts." },
            { name: "Suresh Menon", contact: "+91 98477 33333", story: "Teaches local schools about palm leaf heritage." },
            { name: "Ravi Nair", contact: "+91 98477 44444", story: "Combines palm leaf engraving with modern artistic designs." }
          ]
        },
        {
          name: "Kerala Mural Painting",
          img: "WhatsApp Image 2025-10-26 at 11.26.27 PM.jpeg",
          price: "₹1,500",
          artisans: [
            { name: "Ramesh Menon", contact: "+91 98478 56789", story: "Paints traditional murals in temples preserving Kerala’s heritage." },
            { name: "Leela Devi", contact: "+91 98478 11111", story: "Uses natural pigments to maintain authenticity in mural art." },
            { name: "Anitha Kumar", contact: "+91 98478 22222", story: "Her work decorates homes and public spaces inspired by murals." },
            { name: "Suresh Das", contact: "+91 98478 33333", story: "Trains youth in mural techniques combining old and new styles." },
            { name: "Ravi Menon", contact: "+91 98478 44444", story: "Maintains temple murals and teaches restoration techniques." }
          ]
        }
      ],
    };;

const stateList = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
];

const verifiedSellers = {
  "Andhra Pradesh": {name:"SRI DURGA HANDLOOMS", contact:"9848419988", story:"IndiaHandmade-listed handloom seller from Vetapalem, Bapatla, with Chirala silk sarees.", source:"IndiaHandmade"},
  "Assam": {name:"PALLABI HANDLOOM", contact:"6000295324", story:"IndiaHandmade-listed handloom seller from Guwahati offering Assamese silk products.", source:"IndiaHandmade"},
  "Gujarat": {name:"BIJALANI ANCHAL BHAI", contact:"8347053526", story:"IndiaHandmade-listed artisan from Kutch offering handcrafted leather products.", source:"IndiaHandmade"},
  "Himachal Pradesh": {name:"HimalayanKraft and Loom Pvt. Ltd.", contact:"9857704951", story:"IndiaHandmade-listed Kullu seller offering handloom and handcrafted products.", source:"IndiaHandmade"},
  "Jharkhand": {name:"R.S HANDLOOM", contact:"8578876955", story:"IndiaHandmade-listed handloom seller from Godda, Jharkhand.", source:"IndiaHandmade"},
  "Karnataka": {name:"Vanjre Ramesh", contact:"9845364829", story:"IndiaHandmade-listed Karnataka handloom seller featuring Molakalmuru silk sarees.", source:"IndiaHandmade"},
  "Kerala": {name:"The Kannapuram Weavers Industrial (Working) Co Operative Society Ltd", contact:"9895900947", story:"IndiaHandmade-listed cooperative in Kannur selling Kerala handloom products.", source:"IndiaHandmade"},
  "Madhya Pradesh": {name:"CHANDERI HANDLOOM DEVELOPMENT PRODUCER COMPANY LIMITED", contact:"9907861946", story:"IndiaHandmade-listed Chanderi handloom producer with products from Chanderi.", source:"IndiaHandmade"},
  "Maharashtra": {name:"MAHARASHTRA STATE HANDLOOMS CORPORATION LIMITED", contact:"9822579776", story:"IndiaHandmade-listed state handloom corporation offering Maharashtra handloom products.", source:"IndiaHandmade"},
  "Manipur": {name:"ERAMDAM HANDICRAFT PRODUCER COMPANY LIMITED", contact:"9366292582", story:"IndiaHandmade-listed producer company promoting rural artisans and Manipur handicrafts.", source:"IndiaHandmade"},
  "Odisha": {name:"Odisha State Handloom WCS Ltd. (Boyanika)", contact:"06742395387", story:"IndiaHandmade-listed Odisha handloom cooperative marketplace seller.", source:"IndiaHandmade"},
  "Punjab": {name:"HARSHPREET SINGH", contact:"9971176656", story:"IndiaHandmade-listed Patiala seller specialising in Phulkari products.", source:"IndiaHandmade"},
  "Rajasthan": {name:"SANGANER HAND BLOCK PRODUCER COMPANY LIMITED", contact:"9887995799", story:"IndiaHandmade-listed producer company from Sanganer offering hand-block products.", source:"IndiaHandmade"},
  "Tamil Nadu": {name:"Thirubuvanam Silk Handloom Weavers Cooperative Production and Sale", contact:"8610372861", story:"IndiaHandmade-listed cooperative selling Thirubuvanam silk handloom products.", source:"IndiaHandmade"},
  "Telangana": {name:"KEERTHI GADWAL SAREE HOUSE", contact:"8019560320", story:"IndiaHandmade-listed handloom seller from Jogulamba Gadwal offering traditional Gadwal sarees.", source:"IndiaHandmade"},
  "Uttar Pradesh": {name:"Jamdani Emporium", contact:"9628449374", story:"IndiaHandmade-listed Varanasi handloom seller specialising in Jamdani products.", source:"IndiaHandmade"},
  "Uttarakhand": {name:"Anchala Aswal / MS Moksham Candle Co", contact:"7895906187", story:"IndiaHandmade-listed Dehradun artisan seller of handcrafted products.", source:"IndiaHandmade"},
  "West Bengal": {name:"WEST BENGAL STATE HANDLOOM WEAVERS CO OPERATIVE SOCIETY LTD", contact:"9378066331", story:"IndiaHandmade-listed apex cooperative with a wide Bengal handloom range.", source:"IndiaHandmade"},
  "Delhi": {name:"Falah Handicraft Society", contact:"", story:"IndiaHandmade-listed Delhi cooperative dealing in handloom and handicraft products.", source:"IndiaHandmade"},
  "Arunachal Pradesh": {name:"North Eastern Handicrafts and Handlooms Development Corporation Limited", contact:"9830266499", story:"NEHHDC states that it offers products from Arunachal Pradesh and the other seven North-Eastern states.", source:"IndiaHandmade"},
  "Meghalaya": {name:"North Eastern Handicrafts and Handlooms Development Corporation Limited", contact:"9830266499", story:"NEHHDC states that it offers products from Meghalaya and the other North-Eastern states.", source:"IndiaHandmade"},
  "Mizoram": {name:"North Eastern Handicrafts and Handlooms Development Corporation Limited", contact:"9830266499", story:"NEHHDC states that it offers products from Mizoram and the other North-Eastern states.", source:"IndiaHandmade"},
  "Nagaland": {name:"North Eastern Handicrafts and Handlooms Development Corporation Limited", contact:"9830266499", story:"NEHHDC states that it offers products from Nagaland and the other North-Eastern states.", source:"IndiaHandmade"},
  "Sikkim": {name:"North Eastern Handicrafts and Handlooms Development Corporation Limited", contact:"9830266499", story:"NEHHDC states that it offers products from Sikkim and the other North-Eastern states.", source:"IndiaHandmade"},
  "Tripura": {name:"North Eastern Handicrafts and Handlooms Development Corporation Limited", contact:"9830266499", story:"NEHHDC states that it offers products from Tripura and the other North-Eastern states.", source:"IndiaHandmade"}
};

function buildExpandedListings() {
  const out = {};
  Object.entries(stateCrafts).forEach(([state, crafts]) => {
    if (stateProducts[state]?.length) return;
    const seller = verifiedSellers[state];
    out[state] = crafts.map((craft, i) => ({
      name: craft,
      img: craftImage(craft, state, i),
      price: "Enquire for price",
      artisans: seller ? [{...seller}] : [],
      listingType: seller ? "verified-marketplace" : "craft-discovery"
    }));
  });
  return out;
}

const stateCrafts = {
  "Andhra Pradesh":["Kalamkari","Kondapalli Toys","Etikoppaka Toys"],"Arunachal Pradesh":["Bamboo & Cane Craft","Wood Carving","Textiles"],"Assam":["Muga Silk","Jaapi Craft","Bamboo & Cane Craft"],"Bihar":["Madhubani Painting","Sujani Embroidery","Bhagalpur Silk"],"Chhattisgarh":["Dhokra Metal Craft","Bell Metal Craft","Terracotta"],"Goa":["Coconut Shell Craft","Bamboo Craft","Azulejo Tiles"],"Gujarat":["Patola Weaving","Bandhani","Rogan Art"],"Haryana":["Phulkari","Pottery","Handloom Textiles"],"Himachal Pradesh":["Chamba Rumal","Kullu Shawls","Wood Carving"],"Jharkhand":["Sohrai Painting","Dhokra","Bamboo Craft"],"Karnataka":["Mysore Painting","Channapatna Toys","Kasuti Embroidery"],"Kerala":["Aranmula Mirror","Coir Craft","Kerala Mural Painting"],"Madhya Pradesh":["Gond Painting","Batik","Chanderi Weaving"],"Maharashtra":["Warli Painting","Paithani","Sawantwadi Lacquerware"],"Manipur":["Wangkhei Phanek","Kauna Reed Craft","Longpi Pottery"],"Meghalaya":["Cane & Bamboo Craft","Ryndia Silk","Wood Carving"],"Mizoram":["Puan Weaving","Bamboo Craft","Cane Furniture"],"Nagaland":["Naga Shawls","Bamboo Craft","Wood Carving"],"Odisha":["Pattachitra","Silver Filigree","Appliqué Work"],"Punjab":["Phulkari","Punjabi Jutti","Wood Inlay"],"Rajasthan":["Blue Pottery","Block Printing","Kathputli"],"Sikkim":["Thangka Painting","Carpet Weaving","Wood Craft"],"Tamil Nadu":["Tanjore Painting","Kanchipuram Silk","Bronze Casting"],"Telangana":["Cheriyal Scrolls","Pochampally Ikat","Bidri Craft"],"Tripura":["Bamboo Craft","Cane Furniture","Handloom Textiles"],"Uttar Pradesh":["Chikankari","Banarasi Silk","Moradabad Metal Craft"],"Uttarakhand":["Aipan Art","Ringaal Bamboo Craft","Wool Weaving"],"West Bengal":["Kantha","Dokra","Terracotta"],"Andaman and Nicobar Islands":["Coconut Craft","Bamboo Craft","Shell Craft"],"Chandigarh":["Phulkari","Handloom Textiles","Pottery"],"Dadra and Nagar Haveli and Daman and Diu":["Warli Art","Bamboo Craft","Pottery"],"Delhi":["Zardozi","Blue Pottery","Handcrafted Jewellery"],"Jammu and Kashmir":["Pashmina","Kashmiri Papier-Mâché","Walnut Wood Carving"],"Ladakh":["Thangka Painting","Wool Weaving","Wood Craft"],"Lakshadweep":["Coir Craft","Coconut Craft","Shell Craft"],"Puducherry":["Palm Leaf Craft","Pottery","Handmade Textiles"]
};

const tilePalettes=[["#7c2d12","#fed7aa"],["#164e63","#a5f3fc"],["#365314","#d9f99d"],["#7f1d1d","#fecaca"],["#581c87","#e9d5ff"],["#134e4a","#99f6e4"]];
function escapeXml(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}
function tileImage(state,index=0){const[a,b]=tilePalettes[index%tilePalettes.length],craft=(stateCrafts[state]||["Traditional Craft"])[0],initials=state.split(/\s+/).map(w=>w[0]).slice(0,3).join("").toUpperCase();const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="700" height="500" fill="url(#g)"/><circle cx="575" cy="95" r="125" fill="white" opacity=".14"/><circle cx="105" cy="420" r="180" fill="white" opacity=".09"/><path d="M0 370 Q175 260 350 370 T700 350 V500 H0Z" fill="white" opacity=".10"/><text x="48" y="82" fill="white" font-family="Arial" font-size="28" font-weight="700">APNA LOCAL MART</text><text x="48" y="245" fill="white" font-family="Georgia" font-size="72" font-weight="700">${escapeXml(initials)}</text><text x="48" y="305" fill="white" font-family="Arial" font-size="30" font-weight="700">${escapeXml(state)}</text><text x="48" y="350" fill="white" opacity=".92" font-family="Arial" font-size="22">${escapeXml(craft)}</text></svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;}
function craftImage(craft,state,index=0){const[a,b]=tilePalettes[(index+2)%tilePalettes.length];const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="700" height="500" fill="url(#g)"/><g fill="none" stroke="white" opacity=".22" stroke-width="8"><circle cx="350" cy="250" r="150"/><path d="M120 250h460M350 70v360"/></g><text x="50" y="90" fill="white" font-family="Arial" font-size="24" font-weight="700">${escapeXml(state)}</text><text x="50" y="390" fill="white" font-family="Georgia" font-size="38" font-weight="700">${escapeXml(craft)}</text></svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;}
Object.assign(stateProducts, buildExpandedListings());

const fallbackImages=[];

let currentState = null;
let currentProducts = [];
let activeCategory = "all";

function allProducts() {
  return Object.entries(stateProducts).flatMap(([state, products]) =>
    products.map((product, index) => ({...product, state, originalIndex:index}))
  );
}

function productCategory(name) {
  const n = name.toLowerCase();
  if (/painting|kalam|tikuli|mural/.test(n)) return "painting";
  if (/silk|saree|embroidery|textile|shawl|sujani|khatwa/.test(n)) return "textile";
  if (/mirror|terracotta|bamboo|coir|doll|boat|palm|makeup/.test(n)) return "craft";
  return "decor";
}

function imageForProduct(product,index=0){if(product.img&&/^(https?:\/\/|data:)/i.test(product.img))return product.img;return craftImage(product.name,product.state||"India",index);}

function moneyValue(price) {
  return Number(String(price || "").replace(/[^0-9.]/g, "")) || 0;
}

function slug(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
}

function renderStateCards() {
  const grid = document.getElementById("state-grid");
  grid.innerHTML = stateList.map((state, i) => {
    const count = (stateProducts[state] || []).length;
    const crafts = stateCrafts[state] || ["Traditional crafts", "Handloom", "Local art"];
    const image = tileImage(state, i);
    const label = count ? `${count} marketplace products` : `${crafts.length} craft traditions`;
    return `<button class="state-card" onclick="showProducts('${state.replace(/'/g,"\\'")}')" aria-label="Explore ${state}">
      <span class="state-bg" style="background-image:url('${image}')"></span>
      <span class="state-info"><strong>${state}</strong><small>${label}</small></span>
    </button>`;
  }).join("");
}

function productCard(product, index=0) {
  const image = imageForProduct(product,index);
  const cat = productCategory(product.name);
  return `<article class="product-card" onclick="showDetails('${product.state.replace(/'/g,"\\'")}',${product.originalIndex ?? index})">
    <div class="product-image-wrap">
      <img src="${image}" alt="${product.name}" loading="lazy">
      <span class="product-tag">${cat}</span>
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <div class="product-state">${product.state}</div>
      <div class="product-bottom"><span class="price">${product.price}</span><span class="view-link">View details →</span></div>
    </div>
  </article>`;
}

function renderProducts(products, targetId="featured-products") {
  const target = document.getElementById(targetId);
  if (!target) return;
  if (!products.length) {
    target.innerHTML = `<div class="no-results"><h3>No products found</h3><p>Try another search, state or category.</p></div>`;
    return;
  }
  target.innerHTML = products.map((p,i)=>productCard(p,i)).join("");
}

function filterAndRenderFeatured() {
  const query = document.getElementById("global-search").value.trim().toLowerCase();
  let products = allProducts().filter(p => {
    const matchesQuery = !query || `${p.name} ${p.state} ${p.artisans?.map(a=>a.name).join(" ")}`.toLowerCase().includes(query);
    const matchesCat = activeCategory === "all" || productCategory(p.name) === activeCategory;
    return matchesQuery && matchesCat;
  });
  sortProducts(products);
  document.getElementById("clear-search").style.display = query ? "block" : "none";
  renderProducts(products, "featured-products");
}

function sortProducts(products) {
  const sort = document.getElementById("sort-products")?.value || "default";
  if (sort === "low") products.sort((a,b)=>moneyValue(a.price)-moneyValue(b.price));
  if (sort === "high") products.sort((a,b)=>moneyValue(b.price)-moneyValue(a.price));
  if (sort === "az") products.sort((a,b)=>a.name.localeCompare(b.name));
}

function showAllProducts() {
  activeCategory = "all";
  document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active", c.dataset.category==="all"));
  document.getElementById("global-search").value = "";
  filterAndRenderFeatured();
  document.getElementById("featured").scrollIntoView({behavior:"smooth"});
}

function showProducts(state) {
  currentState = state;
  document.getElementById("home-screen").classList.add("hidden");
  document.getElementById("details-screen").classList.add("hidden");
  document.getElementById("products-screen").classList.remove("hidden");
  document.getElementById("state-title").textContent = state;
  const products = stateProducts[state] || [];
  currentProducts = products.map((p,i)=>({...p,state,originalIndex:i}));
  const crafts = stateCrafts[state] || ["Traditional crafts", "Handloom", "Local art"];
  document.getElementById("state-subtitle").textContent = products.length
    ? `${products.length} craft listings • verified seller contacts where publicly available`
    : `Explore ${crafts.length} craft traditions from ${state}`;
  document.getElementById("state-search").value = "";
  const target = document.getElementById("product-list");
  if (products.length) {
    renderProducts(currentProducts, "product-list");
  } else {
    target.innerHTML = `<div class="craft-preview-grid">${crafts.map((craft,i)=>`<article class="craft-preview"><img src="${craftImage(craft,state,i)}" alt="${craft} from ${state}"><div><span class="eyebrow dark">CRAFT TRADITION</span><h3>${craft}</h3><p>${state}'s traditional craft heritage, presented as a discovery preview. Marketplace seller listings can be added when verified.</p></div></article>`).join("")}</div>`;
  }
  window.scrollTo({top:0,behavior:"smooth"});
}

function filterStateProducts() {
  const q = document.getElementById("state-search").value.trim().toLowerCase();
  const filtered = currentProducts.filter(p => `${p.name} ${p.state} ${p.artisans?.map(a=>a.name).join(" ")}`.toLowerCase().includes(q));
  renderProducts(filtered,"product-list");
}

function showDetails(state,index) {
  const p = stateProducts[state]?.[index];
  if (!p) return;
  currentState = state;
  document.getElementById("products-screen").classList.add("hidden");
  document.getElementById("home-screen").classList.add("hidden");
  document.getElementById("details-screen").classList.remove("hidden");

  const image = imageForProduct(p,index);
  const sellers = (p.artisans || []).map(a => {
    const rawPhone = String(a.contact || "").replace(/[^0-9+]/g,"");
    const call = rawPhone ? `<a class="call-btn" href="tel:${rawPhone}" aria-label="Call ${a.name}">☎ Call seller</a>` : `<span class="seller-note">Contact not publicly listed</span>`;
    return `<div class="seller-card">
      <h3>${a.name}</h3>
      <p class="seller-story">${a.story}</p>
      ${call}
    </div>`;
  }).join("");

  document.getElementById("details-content").innerHTML = `
    <div><img class="detail-main-image" src="${image}" alt="${p.name}"></div>
    <div class="detail-copy">
      <span class="eyebrow dark">${productCategory(p.name).toUpperCase()} • ${state}</span>
      <h1>${p.name}</h1>
      <div class="detail-price">${p.price}</div>
      <p class="detail-desc">A traditional product listed on Apna Local Mart. Explore the artisan stories below and contact a seller directly to enquire about the product.</p>
      <h2 class="seller-title">Meet the artisans</h2>
      ${sellers || "<p class='detail-desc'>This is a craft-discovery listing. I have not added a private seller name or phone number unless it could be publicly verified.</p>"}
    </div>`;
  window.scrollTo({top:0,behavior:"smooth"});
}

function backToProducts() {
  if (currentState) showProducts(currentState); else showHome();
}

function showHome() {
  document.getElementById("products-screen").classList.add("hidden");
  document.getElementById("details-screen").classList.add("hidden");
  document.getElementById("home-screen").classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}

function clearSearch() {
  document.getElementById("global-search").value = "";
  filterAndRenderFeatured();
}

function toggleMobileNav() {
  document.getElementById("mobile-nav").classList.toggle("hidden");
}
function closeMobileNav() {
  document.getElementById("mobile-nav").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const products = allProducts();
  document.getElementById("hero-product-count").textContent = products.length;
  renderStateCards();
  filterAndRenderFeatured();

  document.getElementById("global-search").addEventListener("input", filterAndRenderFeatured);
  document.getElementById("sort-products").addEventListener("change", filterAndRenderFeatured);
  document.getElementById("state-search").addEventListener("input", filterStateProducts);

  document.querySelectorAll(".chip").forEach(chip => chip.addEventListener("click", () => {
    activeCategory = chip.dataset.category;
    document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
    chip.classList.add("active");
    filterAndRenderFeatured();
  }));
});