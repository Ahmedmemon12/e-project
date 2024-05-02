const prod = [
    {
        id: '1',
        title: 'Taj Mahal - India',
        description: "The Taj Mahal is an ivory-white marble mausoleum located in the city of Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal, who died during childbirth. The Taj Mahal is considered one of the most beautiful buildings in the world and is a UNESCO World Heritage Site.",
        images: [
            'https://assets.editorial.aetnd.com/uploads/2011/06/taj-mahal-gettyimages-463924915.jpg?width=768',
            'https://mogulesque.com/wp-content/uploads/2020/02/36770716074_58c7f3613c_o-scaled-scaled.jpg',
            'https://static.toiimg.com/thumb/91955051/Taj-Mahal-India.jpg?width=1200&height=900'
        ],
        direction: 'North'
    },
    {
        id: '2',
        title: 'Machu Picchu - Peru',
        description: "Machu Picchu is an ancient Inca citadel located in the Andes Mountains of Peru. It was built in the 15th century and later abandoned, only to be rediscovered by American explorer Hiram Bingham in 1911. Machu Picchu is renowned for its sophisticated dry-stone construction and stunning panoramic views of the surrounding mountains.",
        images: [
            'https://lp-cms-production.imgix.net/2020-10/500pxRF_16641625.jpg',
            'https://cdn.britannica.com/25/180725-050-03DE70E6/area-Machu-Picchu-Peru.jpg',
            'https://www.peruforless.com/blog/wp-content/uploads/2020/05/machu-picchu-ruins.jpg'
        ],
        direction: 'North'
    },
    {
        id: '3',
        title: 'Stonehenge - United Kingdom',
        description: "Stonehenge is a prehistoric monument located in Wiltshire, England. It consists of a ring of standing stones, each around 13 feet high, seven feet wide, and weighing around 25 tons. The purpose and significance of Stonehenge remain a subject of speculation, but it is believed to have been constructed between 3000 and 2000 BC.",
        images: [
            'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/stonehenge/history/stonehenge-aerial-1440x612.jpg?w=1440&h=612&mode=crop&scale=both&quality=100&anchor=NoFocus&WebsiteVersion=20240220070057',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjmmut7ijGIWEm5jGLXAAHRiUs6fYud-3sOnxeZnSAQ&s',
            'https://cdn.britannica.com/01/153601-050-CC20C4EB/Stonehenge-Salisbury-Plain-England-Wiltshire.jpg'
        ],
        direction: 'North'
    },
    {
        id: '4',
        title: 'Colosseum - Italy',
        description: "The Colosseum is an ancient amphitheater located in the center of Rome, Italy. It is the largest amphitheater ever built and is considered one of the greatest works of Roman architecture and engineering. Originally capable of seating around 80,000 spectators, it was used for gladiatorial contests, public spectacles, animal hunts, executions, re-enactments of famous battles, and dramas based on classical mythology.",
        images: [
            'https://afar.brightspotcdn.com/dims4/default/b7bdc3d/2147483647/strip/true/crop/800x400+0+50/resize/1440x720!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F51%2Fe8%2F6f51176b6b8ac8874d7fd446e87d%2Foriginal-e59cf6f963b8bc3929fee67e1577f1cc.jpg',
            'https://storage.googleapis.com/pod_public/1300/154173.jpg',
            'https://www.bookmundi.com/_ipx/f_jpeg&q_55&s_3072x1722/https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/the-colosseum-tour-1551177291-785X440.jpg'
        ],
        direction: 'North'
    },
    {
        id: '5',
        title: 'Petra - Jordan',
        description: "Petra is a historical and archaeological city in southern Jordan, famous for its rock-cut architecture and water conduit system. It was the capital of the Nabatean Kingdom in the 4th century BCE. Petra is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
        images: [
            'https://cdn.britannica.com/24/153524-050-BA9D084B/Al-Dayr-Petra-Jordan.jpg',
            'https://thenextcrossing.com/wp-content/uploads/2014/04/jordan_petra_the_monastery_1210-HDR-Pano-compressed.jpg',
            'https://www.ancient-origins.net/sites/default/files/field/image/Petra-Jordan-Ad-Deir-Monastery.jpg'
        ],
        direction: 'North'
    },
    {
        id: '6',
        title: 'Acropolis of Athens - Greece',
        description: "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens, Greece. It contains several ancient buildings of great architectural and historic significance, the most famous being the Parthenon. The Acropolis is a UNESCO World Heritage Site and is considered the symbol of the city of Athens and the cradle of Western civilization.",
        images: [
            'https://cdn.britannica.com/22/99622-159-68A77F6C/Parthenon-Athens.jpg',
            'https://www.planetware.com/photos-large/GR/greece-athens-acropolis-parthenon.jpg',
            'https://www.greekboston.com/wp-content/uploads/2016/07/Acroplis-Athens.jpg'
        ],
        direction: 'North'
    },
    {
        id: '7',
        title: 'Angkor Wat - Cambodia',
        description: "Angkor Wat is a temple complex in Cambodia and the largest religious monument in the world. It was originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, gradually transforming into a Buddhist temple toward the end of the 12th century.",
        images: [
            'https://etimg.etb2bimg.com/photo/91259638.cms',
            'https://lp-cms-production.imgix.net/2021-11/GettyImages-1304987250.jpg?auto=format&q=75&w=1920',
            'https://static.wixstatic.com/media/01d01c_20229d1c910f4d8586ae68280dd1ff5a~mv2.jpeg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/01d01c_20229d1c910f4d8586ae68280dd1ff5a~mv2.jpeg'
        ],
        direction: 'South'
    },
    {
        id: '8',
        title: 'Pyramids of Teotihuacan - Mexico',
        description: "The Pyramids of Teotihuacan are located near Mexico City and are among the largest pyramids in the world. The site is an ancient Mesoamerican city believed to have been established around 100 BCE. The Pyramid of the Sun and the Pyramid of the Moon are the most prominent structures in Teotihuacan.",
        images: [
            'https://cdn.mos.cms.futurecdn.net/6Txsk2q5k3Hxho7cVhdrbV-1200-80.jpg',
            'https://cdn1.matadornetwork.com/blogs/1/2023/08/Teotihuacan-pyramid-hot-air-balloons-social.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/a/a1/Piramide_de_la_Luna_072006.jpg'
        ],
        direction: 'South'
    },
    {
        id: '9',
        title: 'Borobudur - Indonesia',
        description: "Borobudur is a 9th-century Mahayana Buddhist temple in Central Java, Indonesia. It is the world's largest Buddhist temple and a UNESCO World Heritage Site. The temple is decorated with approximately 2,672 relief panels and 504 Buddha statues.",
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/7/73/Borobudur_Temple.jpg',
            'https://dailyspokesman.net/live/wp-content/uploads/2024/01/Borobudur-Temple-is-worlds-biggest-Buddhist-monument.jpg',
            'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revision-2019/image1.jpg'
        ],
        direction: 'South'
    },
    {
        id: '10',
        title: 'Karnak Temple - Egypt',
        description: "The Karnak Temple Complex is a vast ancient Egyptian temple complex located near Luxor, Egypt. It is dedicated to the god Amun and was a key religious center during the New Kingdom period. Karnak is renowned for its massive columns, hieroglyphs, and avenue of sphinxes.",
        images: [
            'https://cdn.britannica.com/19/153419-050-5FF57DFE/Ruins-statues-Karnak-Egypt.jpg',
            'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/karnak-temple.jpg',
            'https://www.thediscoveriesof.com/wp-content/uploads/2022/06/Karnak-Temple-Luxor-34.jpg.webp'
        ],
        direction: 'South'
    },
    {
        id: '11',
        title: 'Statue of Liberty - United States',
        description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City. It was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was a gift to the United States from the people of France and is a symbol of freedom and democracy.",
        images: [
            'https://www.worldatlas.com/upload/f4/d8/7b/shutterstock-1397031029.jpg',
            'https://cdn.britannica.com/82/183382-050-D832EC3A/Detail-head-crown-Statue-of-Liberty-New.jpg',
            'https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/5/2018/06/StatueOfLiberty.jpg'
        ],
        direction: 'South'
    },
    {
        id: '12',
        title: 'Christ the Redeemer - Brazil',
        description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City. It was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was a gift to the United States from the people of France and is a symbol of freedom and democracy.",
        images: [
            'https://media.cntraveler.com/photos/58629e8e440f8ba323b9bbea/16:9/w_2560%2Cc_limit/christ-the-redeemer-statue-rio-cr-GettyImages-523194487.jpg',
            'https://trips-southamerica.com/wp-content/uploads/Cristo.jpg',
            'https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20231122221124_e234551a358fb3daaba790827b7d493bc6bb7b9627af184627a737ed0049d0bb.jpg'
        ],
        direction: 'South'
    },
    {
        id: '13',
        title: 'Eiffel Tower - France',
        description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City. It was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was a gift to the United States from the people of France and is a symbol of freedom and democracy.",
        images: [
            'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
            'https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/16:9/w_2560%2Cc_limit/GettyImages-468366251.jpg',
            'https://static.euronews.com/articles/stories/07/49/68/12/1440x810_cmsv2_55b0fa25-15e0-59eb-9ea6-984a92edfded-7496812.jpg'
        ],
        direction: 'South'
    },
    {
        id: '14',
        title: 'Leaning Tower of Pisa - Italy',
        description: "The Leaning Tower of Pisa is a freestanding bell tower located in the city of Pisa, Italy. It is known worldwide for its unintended tilt, which began during its construction in the 12th century due to unstable subsoil. Despite efforts to stabilize it, the tower continues to lean and has become a symbol of Italy.",
        images: [
            'https://lh3.googleusercontent.com/ci/AL18g_QuHRVs5PWOIaZ_YpJNSVMwcBf_QobWlSuh3OTQ9Gns2RKvvQybc6gwiR-LVs9dG0cVTW_86Q=s1200',
            'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAzNjI4NTUyMTk5ODc0NDkx/the-leaning-tower-of-pisa-to-visit-or-not-to-visit.jpg',
            'https://cdn.britannica.com/03/152203-050-28CCC600/Close-up-Leaning-Tower-of-Pisa-Italy.jpg'
        ],
        direction: 'East'
    },
    {
        id: '15',
        title: 'Mount Rushmore - United States',
        description: "Mount Rushmore is a colossal sculpture carved into the granite face of Mount Rushmore in the Black Hills of South Dakota, United States. It features the 60-foot-tall heads of four United States presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln. The monument, completed in 1941, attracts millions of visitors each year.",
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mount_Rushmore_detail_view_%28100MP%29.jpg/1200px-Mount_Rushmore_detail_view_%28100MP%29.jpg',
            'https://www.nps.gov/common/uploads/grid_builder/moru/crop16_9/C6C71E83-1DD8-B71B-0B3B2B02603AB440.jpg?width=640&quality=90&mode=crop',
            'https://static.toiimg.com/photo/75411810.cms'
        ],
        direction: 'East'
    },
    {
        id: '16',
        title: 'The Pyramids of Chichen Itza - Mexico',
        description: "The Pyramids of Chichen Itza are ancient Mayan ruins located on the Yucatán Peninsula in Mexico. The site contains several pyramid temples, with the most famous being the Temple of Kukulcan, also known as El Castillo. Chichen Itza was a major center of Mayan civilization and is now a UNESCO World Heritage Site.",
        images: [
            'https://cdn.britannica.com/49/61349-131-B30C16E2/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg',
            'https://cdn.britannica.com/86/179586-138-8B763D72/Overview-Chichen-Itza-Yucatan-Mexico.jpg?w=800&h=450&c=crop',
            'https://cdn.vallarta-adventures.com/sites/default/files/2021-05/CHichen10.jpeg'
        ],
        direction: 'East'
    },
    {
        id: '17',
        title: 'The Parthenon - Greece',
        description: "The Parthenon is a former temple dedicated to the goddess Athena, located on the Acropolis of Athens, Greece. It is considered one of the greatest cultural monuments of ancient Greece and is renowned for its architectural beauty and historical significance. The Parthenon is a symbol of classical Greek civilization.",
        images: [
            'https://cdn.britannica.com/54/150954-050-F8D14782/Night-view-Parthenon-Athens.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg',
            'https://static.toiimg.com/thumb/msid-35985149,width=1200,height=900/35985149.jpg'
        ],
        direction: 'East'
    },
    {
        id: '18',
        title: 'The Roman Forum - Italy',
        description: "The Roman Forum, located in the heart of ancient Rome, was the bustling center of political, religious, and commercial life in the Roman Empire. It contains the ruins of several important ancient government buildings, temples, and monuments, including the Temple of Saturn, the Arch of Septimius Severus, and the Curia Julia.",
        images: [
            'https://www.planetware.com/photos-large/I/italy-rome-roman-forum-overview.jpg',
            'https://static.wixstatic.com/media/e41b5c_8e39787f991543fd97451f50d467ae01~mv2.jpg/v1/fill/w_2500,h_1666,al_c/e41b5c_8e39787f991543fd97451f50d467ae01~mv2.jpg',
            'https://romesite.com/images/roman_forum_rome.jpg'
        ],
        direction: 'East'
    },
    {
        id: '19',
        title: 'The Kremlin - Russia',
        description: "The Kremlin is a historic fortified complex located at the heart of Moscow, Russia. It serves as the official residence of the President of the Russian Federation and has been the center of Russian political power for centuries. The Kremlin includes several palaces, cathedrals, and government buildings.",
        images: [
            'https://cdn.britannica.com/56/80456-050-237A814C/State-Historical-Museum-Red-Square-Russia-Moscow.jpg',
            'https://cdn.britannica.com/26/116526-050-76C37BBC/Cathedral-of-St-Basil-the-Blessed-Moscow.jpg',
            'https://bridgetomoscow.com/files/200/1785.jpg'
        ],
        direction: 'East'
    },
    {
        id: '20',
        title: 'The Sphinx of Giza - Egypt',
        description: "The Great Sphinx of Giza is a limestone statue of a reclining sphinx, a mythical creature with the body of a lion and the head of a human, located on the Giza Plateau near Cairo, Egypt. It is one of the largest and oldest statues in the world and is believed to have been built during the reign of the pharaoh Khafre in the 26th century BCE.",
        images: [
            'https://static.toiimg.com/thumb/52554625/Great-Sphinx-of-Giza.jpg?width=1200&height=900',
            'https://assets.editorial.aetnd.com/uploads/2018/01/the-sphinx-gettyimages-1183584133.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/9/99/Great_Sphinx_of_Giza_2.jpg'
        ],
        direction: 'East'
    },
    {
        id: '21',
        title: 'The Alhambra - Spain',
        description: "The Alhambra is a palace and fortress complex located in Granada, Spain. It was originally constructed as a small fortress in 889 CE and later converted into a royal palace by the Nasrid dynasty in the 13th century. The Alhambra is renowned for its stunning Islamic architecture, intricate tilework, and beautiful gardens.",
        images: [
            'https://cdn.britannica.com/56/140856-050-C408FFB6/Patio-de-los-Arrayanes-Alhambra-Spain-Granada.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg',
            'https://cdn.britannica.com/56/159656-050-171E6BB0/Fuente-de-los-Leones-centre-one-Patio.jpg'
        ],
        direction: 'East'
    },
    {
        id: '22',
        title: 'The Pantheon - Italy',
        description: "The Pantheon is a former Roman temple, now a church, located in Rome, Italy. It was commissioned by Emperor Hadrian in the 2nd century CE and is renowned for its large domed roof with an opening (oculus) at the center, which allows natural light to enter the interior. The Pantheon is one of the best-preserved ancient Roman buildings and is a symbol of Roman architectural ingenuity.",
        images: [
            'https://cms.througheternity.com/upload/CONF83/20200603/rome-pantheon.jpg',
            'https://www.italiandualcitizenship.net/wp-content/uploads/2019/03/History-of-the-Pantheon-Italy.jpg',
            'https://www.tripsavvy.com/thmb/-5QHJDweQ8gw-0nzKfRA0yO3R6Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pantheon1-a9faad39f0014bdfa9fb418913bd8cc8.JPG'
        ],
        direction: 'East'
    },
    {
        id: "23",
        title: "The Tower of London - United Kingdom",
        images: [
            "https://cdn.britannica.com/59/136959-050-79D33286/keep-White-Tower.jpg",
            "https://worldstrides.com/wp-content/uploads/2015/07/api201.jpg",
            "https://cdn.britannica.com/71/178971-050-9F37F276/Tower-of-London.jpg"
        ],
        description: "The Tower of London, officially Her Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle located on the north bank of the River Thames in central London. It was founded towards the end of 1066 as part of the Norman Conquest of England. The Tower has served variously as an armoury, a treasury, a menagerie, the home of the Royal Mint, a public record office, and the home of the Crown Jewels of England.",
        direction: "East"
    },
    {
        id: "24",
        title: "The Forbidden City - China",
        images: [
            "https://cdn.britannica.com/03/198203-050-138BB1C3/entrance-Gate-of-Divine-Might-Beijing-Forbidden.jpg",
            "https://cdn.britannica.com/32/117732-050-9261CFE0/Palace-of-Heavenly-Purity-Forbidden-City-Beijing.jpg",
            "https://data.trippest.com/images/info/beijing/870-10.jpg"
        ],
        description: "The Forbidden City, located in Beijing, China, served as the imperial palace and political center of Chinese government for nearly 500 years. It was constructed from 1406 to 1420 during the Ming Dynasty and consists of 980 surviving buildings with 8,704 rooms. It is a UNESCO World Heritage Site and is considered one of the most important cultural landmarks in China.",
        direction: "East"
    },
    {
        id: "25",
        title: "The Great Wall of China - China",
        images: [
            "https://cdn.britannica.com/82/178682-050-0F8C47E3/Great-Wall-of-China-Mutianyu-Beijing.jpg",
            "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892506/EducationHub/photos/the-great-wall-of-china.jpg",
            "https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg"
        ],
        description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe.",
        direction: "East"
    },
    {
        id: "26",
        title: "The Hagia Sophia - Turkey",
        images: [
            "https://cdn.britannica.com/03/189803-050-871B95C4/Hagia-Sophia-Istanbul.jpg",
            "https://i.tribune.com.pk/media/images/thumbs_b_c_cc07db591d49baae325e8bb686d7ca9b1595058056-0/thumbs_b_c_cc07db591d49baae325e8bb686d7ca9b1595058056-0.jpg",
            "https://muze.gen.tr/images/hagia_sophia_mosque.jpg"
        ],
        description: "Hagia Sophia, officially the Ayasofya Mosque, is a Late Antique place of worship in Istanbul, Turkey. Built-in 537 AD at the beginning of the Middle Ages, it was famous in particular for its massive dome. It was the world's largest building and an engineering marvel of its time. It served as an Eastern Orthodox cathedral, a Roman Catholic cathedral, and an imperial mosque before becoming a museum in 1935.",
        direction: "East"
    },
    {
        id: "27",
        title: "The Temple of Heaven - China",
        images: [
            "https://whc.unesco.org/uploads/thumbs/site_0881_0001-750-750-20151104133609.jpg",
            "https://funlifecrisis.com/wp-content/uploads/2019/09/tips-and-guide-temple-of-heaven-beijing-china.jpg",
            "https://static.toiimg.com/photo/52847430.cms"
        ],
        description: "The Temple of Heaven is an imperial complex of religious buildings situated in the southeastern part of central Beijing, China. The complex was visited by the Emperors of the Ming and Qing dynasties for annual ceremonies of prayer to Heaven for a good harvest. It is regarded as a Taoist temple, although Chinese Heaven worship, especially by the reigning monarch of the day, pre-dates Taoism.",
        direction: "East"
    },
    {
        id: "28",
        title: "The Moai Statues of Easter Island - Chile",
        images: [
            "https://th-thumbnailer.cdn-si-edu.com/hPva617R08Xqss6sccZINteQP_8=/800x600/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Easter-Island-moai-statues631.jpg",
            "https://www.artnews.com/wp-content/uploads/2022/12/GettyImages-921707628.jpg?w=1200",
            "https://assets.editorial.aetnd.com/uploads/2009/11/easter-island-gettyimages-89175284.jpg"
        ],
        description: "The Moai, or mo'ai, are monolithic human figures carved by the Rapa Nui people on Easter Island in eastern Polynesia between the years 1250 and 1500. Nearly half are still at Rano Raraku, the main moai quarry, but hundreds were transported from there and set on stone platforms called ahu around the island's perimeter.",
        direction: "East"
    },
    {
        id: "29",
        title: "The Palace of Versailles - France",
        images: [
            "https://www.travelandleisure.com/thmb/sR2kS_tl_yz4bxFkxDWyaVv6lmw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/versailles-palace-courtyard-SECRET1216-911d9538288141a686474b1ce08a2e1a.jpg",
            "https://media.cntraveler.com/photos/5a91a36760543c4ae96c2ec7/16:9/w_2560,c_limit/Versailles_Getty_2018_GettyImages-154772942.jpg",
            "https://cdn.britannica.com/65/114465-050-8C96BD81/Hall-of-Mirrors-ceiling-Jules-Hardouin-Mansart-Charles.jpg"
        ],
        description: "The Palace of Versailles was the principal royal residence of France from 1682, under Louis XIV, until the start of the French Revolution in 1789, under Louis XVI. It is located in the department of Yvelines, in the region of Île-de-France, about 20 kilometers southwest of the center of Paris.",
        direction: "East"
    },
    {
        id: "30",
        title: "The Terracotta Army - China",
        images: [
            "https://nypost.com/wp-content/uploads/sites/2/2019/04/terracotta1.jpg?quality=75&strip=all",
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/108A9/production/_101735776_gettyimages-71400772.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/af/ForbiddenGardens-TerraCottaArmy_2008%274-crwpps.jpg"
        ],
        description: "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE with the purpose of protecting the emperor in his afterlife.",
        direction: "East"
    },
    {
        id: "31",
        "title": "Great Pyramid of Giza - Egypt",
        "description": "The Great Pyramid of Giza, also known as the Pyramid of Khufu, is the oldest and largest of the three pyramids in the Giza pyramid complex. It was built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu around 2560 BCE. It is the only remaining ancient wonder of the world.",
        "images": [
            "https://images.ctfassets.net/cnu0m8re1exe/gyiliMlNeupSptslOAE9x/beb9a72accec1d6844895d12ed991244/DSC-E0818_01.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
            "https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg",
            "https://cdn.britannica.com/06/122506-050-C8E03A8A/Pyramid-of-Khafre-Giza-Egypt.jpg"
        ],
        "direction": "Seven-Wonders"
    },
    {
        id: "32",
        "title": "Hanging Gardens of Babylon - Iraq (Location disputed)",
        "description": "The Hanging Gardens of Babylon are one of the Seven Wonders of the Ancient World. They are believed to have been built in the ancient city-state of Babylon, near present-day Hillah, Babil province, in Iraq. The gardens were supposedly built by King Nebuchadnezzar II for his wife, who missed the lush greenery of her homeland.",
        "images": [
            "https://www.unusualtraveler.com/wp-content/uploads/2019/04/2019-02-08-13.01.53-735x551.jpg",
            "https://i.natgeofe.com/n/18b80fef-63f4-4423-8da0-d99ad9b614df/babylonian-oasis-artist-rendering.jpg",
            "https://content.api.news/v3/images/bin/932fcdd335023b661a092e8025e04650?width=1280"
        ],
        "direction": "Seven-Wonders"
    },
    {
        id: "33",
        "title": "Statue of Zeus at Olympia - Greece",
        "description": "The Statue of Zeus at Olympia was a giant seated figure of the god Zeus, made by the Greek sculptor Phidias around 435 BCE at the sanctuary of Olympia, Greece. It was approximately 12 meters tall and was regarded as one of the Seven Wonders of the Ancient World.",
        "images": [
            "https://facts.net/wp-content/uploads/2023/09/13-mind-blowing-facts-about-the-zeus-statue-1694346305.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/66/Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg"
        ],
        "direction": "Seven-Wonders"
    },
    {
        id: "34",
        "title": "Temple of Artemis at Ephesus - Turkey",
        "description": "The Temple of Artemis at Ephesus was a Greek temple dedicated to the goddess Artemis and was once one of the Seven Wonders of the Ancient World. Located in present-day Turkey, it was built in the 6th century BCE and was destroyed and rebuilt several times before its eventual demise.",
        "images": [
            "https://www.ephesusturkey.com/wp-content/uploads/2015/02/artemis-temple-620x350.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miniaturk_009.jpg/800px-Miniaturk_009.jpg",
            "https://image.hurimg.com/i/hurriyet/75/0x0/62fb6ef64e3fe10d8c5cc195.jpg"
        ],
        "direction": "Seven-Wonders"
    },
    {
        id: "35",
        "title": "Mausoleum at Halicarnassus - Turkey",
        "description": "The Mausoleum at Halicarnassus was a tomb built between 353 and 350 BCE in Halicarnassus, present-day Bodrum, Turkey, for Mausolus, a satrap in the Persian Empire, and his wife Artemisia II of Caria. It was known for its ornate architecture and was one of the Seven Wonders of the Ancient World.",
        "images": [
            "https://wilstar.com/wp-content/uploads/2022/09/mausoleum-1.jpg",
            "https://wilstar.com/wp-content/uploads/2022/09/mausoleum-1.jpg",
            "https://www.orangesmile.com/extreme/img/main/halikarnas-mozolesi_1.jpg"
        ],
        "direction": "Seven-Wonders"
    },
    {
        id: "36",
        "title": "Colossus of Rhodes - Greece",
        "description": "The Colossus of Rhodes was a statue of the Greek sun god Helios, erected on the Greek island of Rhodes by Chares of Lindos between 292 and 280 BCE. It stood over 30 meters tall and was one of the tallest statues of the ancient world.",
        "images": [
            "https://greekcitytimes.com/wp-content/uploads/2021/07/Colossus-of-rhodes-599x600.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJrWad3hE7ipYoEvPmifZCNuNRQ0fqliSitOkQPnRfKSmkFHxOJ2Pixurqa-H8z27A4o&usqp=CAU"
        ],
        "direction": "Seven-Wonders"
    },
    {
        id: "37",
        "title": "Lighthouse of Alexandria - Egypt",
        "description": "The Lighthouse of Alexandria, also known as the Pharos of Alexandria, was a lighthouse built by the Ptolemaic Kingdom between 280 and 247 BCE on the island of Pharos at Alexandria, Egypt. It was one of the tallest man-made structures in the world for many centuries and was considered one of the Seven Wonders of the Ancient World.",
        "images": [
            "https://images.memphistours.com/large/4b7d3921c8fd3a8ff33d4e58357bca15.jpg",
            "https://facts.net/wp-content/uploads/2024/01/15-fun-facts-about-the-lighthouse-of-alexandria-1705443853.jpg"
        ],
        "direction": "Seven-Wonders"
    }

]

function displayProduct(productId) {
    const product = prod.find(item => item.id === productId);
    if (product) {
        // Update HTML elements with product details
        document.getElementById('product-title').textContent = product.title;
        document.title = product.title;
        const Img_modal = document.getElementById('image__Slider')

        function imageSlider() {
            Img_modal.innerHTML = null
            product.images.forEach(imageUrl => {
                const image = `<div class="slide">
                <img src="${imageUrl}" alt="" />
            </div>`
                Img_modal.innerHTML += image
            });

        }
        imageSlider()

        document.getElementById('product-direction').textContent = `${product.direction}`;
    } else {
        console.log("Product not found");
    }
}

// Function to extract product ID from URL
function getProductIDFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Usage: Call this function on page load to display the corresponding product
const productId = getProductIDFromURL();
displayProduct(productId);

$(".slideshow").slick({
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: false,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: 'linear'
});