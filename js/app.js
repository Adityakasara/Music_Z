/**
 * Music Z — Apple Music Experience (Full Feature Pro Edition)
 * With 54 Telugu & Hindi Hits, SharePlay, 3-State Repeat, AirPlay, and Audio-Reactive Mesh
 */

document.addEventListener('DOMContentLoaded', () => {

  // Master Catalog: 54 Top Telugu & Hindi Hits
  const MASTER_TRACKS = [
  {
    "id": 1761152593,
    "title": "Chuttamalle (Devara Part 1)",
    "artist": "Anirudh Ravichander, Shilpa Rao & Ramajogayya Sastry",
    "album": "Chuttamalle (From \"Devara Part 1\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/7c/53/867c53cc-4efe-faef-a20e-8d9c896053db/8903431011411_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f9/28/29/f92829b4-5473-17a9-879a-2efe96b8f95b/mzaf_4766756883763132198.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 222,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1770755976,
    "title": "Ayudha Pooja - TELUGU",
    "artist": "Anirudh Ravichander, Kaala Bhairava & Ramajogayya Sastry",
    "album": "Devara Part 1 (Original Motion Picture Soundtrack) - TELUGU - EP",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ce/84/04/ce8404fd-0fb3-b42a-7497-642e68feb574/8903431001313_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fd/7e/59/fd7e59df-13d3-5716-fe89-d61b699bc262/mzaf_3999376079533103487.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 174,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1747191476,
    "title": "Fear Song (Devara Part 1)",
    "artist": "Anirudh Ravichander & Ramajogayya Sastry",
    "album": "Fear Song (From \"Devara Part 1\") - TELUGU - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/c6/af/1dc6af82-69e9-5341-5010-a9223fc25709/8903431001368_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8d/b1/16/8db11650-580e-ab11-9747-b7bb8544ce55/mzaf_14247929829726939234.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 195,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1748968097,
    "title": "Sooseki (Pushpa 2 the Rule)",
    "artist": "Shreya Ghoshal & Chandrabose",
    "album": "Sooseki (From \"Pushpa 2 the Rule\") - TELUGU - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/45/b6/2d/45b62dd5-8ae8-05ce-d145-2ec3b87510b9/8903431001597_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b0/81/bf/b081bf15-255d-8d74-5f3c-f0d6018895ed/mzaf_13394505028899957596.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 260,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1744162427,
    "title": "Pushpa Pushpa (Pushpa 2 the Rule)",
    "artist": "Nakash Aziz, Deepak Blue & Chandrabose",
    "album": "Pushpa Pushpa (From \"Pushpa 2 the Rule\") - TELUGU - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8b/dd/7f/8bdd7fa9-d6f2-2230-5e7a-3c2fe8b5fbfb/8903431993601_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/01/85/b5/0185b5d0-9eb2-7be4-4325-fd3634fbc40b/mzaf_2467991545485613534.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 256,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1782763234,
    "title": "Peelings (Pushpa 2 The Rule)",
    "artist": "Shankarr Babu Kandukoori, Laxmi Dasa, Chandrabose & Siju Thuravoor",
    "album": "Peelings (From \"Pushpa 2 The Rule\") - TELUGU - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a7/e0/f6/a7e0f68e-e41b-6241-0571-67c7d9970989/8903431032553_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/29/da/95/29da9539-5a89-a8d9-e623-891c53edaf45/mzaf_1433661446308103178.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 247,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1756881342,
    "title": "Ta Takkara (Complex Song)",
    "artist": "Sanjith Hegde, Dhee, Santhosh Narayanan & Ramajogayya Sastry",
    "album": "Kalki 2898 AD (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7f/1c/51/7f1c518d-4311-3fd6-a610-f4acab73e7e0/198588725511.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b1/47/30/b147306c-d54c-eff0-4389-c77852dadd46/mzaf_17503407974723116437.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 208,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1753954259,
    "title": "Theme Of Kalki (Kalki 2898 AD)",
    "artist": "Kala Bhairava, Ananthu, Gowtham Bharadwaj, Santhosh Narayanan & Chandra Bose",
    "album": "Theme of Kalki (From \"Kalki 2898 Ad\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/19/cc/9c/19cc9ced-1fea-0743-6f79-c57ac6d2da7c/198588494882.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ce/fb/ed/cefbed1c-c98f-f202-b0bb-8e10ac894d90/mzaf_148736713310840851.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 190,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1728026786,
    "title": "Kurchi Madathapetti (Guntur Kaaram)",
    "artist": "S.S. Thaman, Sri Krishna, Sahithi Chaganti & Saraswati Putra Ramajogayya Sastry",
    "album": "Guntur Kaaram - EP",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a9/54/29/a9542906-08be-3e8d-a26c-635ef92ed5d3/cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/be/a5/c9/bea5c93f-1334-9ccc-34d2-f2a4a650efcd/mzaf_11723625835849097605.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 217,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1728026780,
    "title": "Dum Masala (Guntur Kaaram)",
    "artist": "S.S. Thaman, Sanjith Hegde & Saraswati Putra Ramajogayya Sastry",
    "album": "Guntur Kaaram - EP",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a9/54/29/a9542906-08be-3e8d-a26c-635ef92ed5d3/cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/37/32/e3/3732e3a8-8d2f-82b9-1eab-d4b45ba27a2e/mzaf_6002667929431443539.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 207,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1687526684,
    "title": "Na Roja Nuvve (Kushi)",
    "artist": "Hesham Abdul Wahab & Shiva Nirvana",
    "album": "Na Roja Nuvve (From \"Kushi\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b5/28/a5/b528a58b-5633-d045-5205-894a3c105d1f/197188849610.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6a/94/8a/6a948abe-1f62-4824-6d07-071854e5f4b1/mzaf_7845856316638946970.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 243,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1704814084,
    "title": "Aradhya",
    "artist": "Sid Sriram, Chinmayi Sripada & Shiva Nirvana",
    "album": "Kushi (Original Motion Picture Soundtrack) - EP",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/39/96/f6/3996f671-1958-83dc-d499-51be3c78d6e3/197189791826.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2d/c0/41/2dc04133-c9d2-7f2a-8d96-e989be714da5/mzaf_445988014202251357.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 282,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1721188759,
    "title": "Samayama",
    "artist": "Anurag Kulkarni & Sithara Krishnakumar",
    "album": "Hi Nanna (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/64/4c/1d/644c1db5-68f8-0640-21e2-dd440f7290e7/8903431963253_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/9c/a9/949ca9d4-d36e-5b77-bafa-2e5f7261423d/mzaf_3943643360697243799.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 204,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1721188761,
    "title": "Ammaadi",
    "artist": "Shakthisree Gopalan & Kaala Bhairava",
    "album": "Hi Nanna (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/64/4c/1d/644c1db5-68f8-0640-21e2-dd440f7290e7/8903431963253_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/18/10/0a/18100a51-45bc-e7cd-5672-3fe7ef0e9786/mzaf_8374829122731402339.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 219,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1594544794,
    "title": "Naatu Naatu (RRR)",
    "artist": "Rahul Sipligunj, Kaala Bhairava & M.M. Keeravani",
    "album": "Naatu Naatu (From \"RRR\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/dd/39/14/dd3914e5-a2f3-b355-51f3-9a1f0e3ca246/8903431853592_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8e/dd/a4/8edda474-3fe1-3fe6-43d3-765db520a29b/mzaf_11740310005222997767.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 214,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1619744670,
    "title": "Komuram Bheemudo",
    "artist": "Kaala Bhairava",
    "album": "RRR (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/91/85/29/918529f8-5187-19c7-ac4f-983a9c7c5b78/8903431821683_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/01/89/48/0189486d-ef97-8ad5-8207-d2ed151560dc/mzaf_11243277850008369677.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 254,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1609924889,
    "title": "Kalaavathi (Sarkaru Vaari Paata)",
    "artist": "Sid Sriram & S.S. Thaman",
    "album": "Kalaavathi (From \"Sarkaru Vaari Paata\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dd/13/96/dd1396a1-fd23-693c-137a-b10047cc2b78/196626439680.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/47/2f/a0/472fa0e8-5643-6461-0653-56b87aa67fab/mzaf_17345742665182397098.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 242,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1630189624,
    "title": "Penny",
    "artist": "Nakash Aziz",
    "album": "Sarkaru Vaari Paata (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/bb/34/4c/bb344c7f-4b66-bec7-48ca-08c6b205414d/196925205214.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/79/7d/3c/797d3cc8-6368-1a8a-1526-8b0a700739e3/mzaf_15418485431443013195.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 280,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1736707044,
    "title": "Butta Bomma (Remix) (Ala Vaikunthapurramuloo)",
    "artist": "S.S. Thaman, Armaan Malik & Saraswati Putra Ramajogayya Sastry",
    "album": "Butta Bomma (Remix) [From \"Ala Vaikunthapurramuloo\"] - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/46/aa/48/46aa4863-c1ec-4574-e98e-80b8c1f3ef69/cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/28/e0/d3/28e0d30a-2afe-66e4-ac03-69b6d779fecd/mzaf_7857615290499608693.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 198,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1493907999,
    "title": "Ramuloo Ramulaa",
    "artist": "Anurag Kulkarni & Mangli",
    "album": "Ala Vaikunthapurramuloo (Original Motion Pictures Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/46/14/df/4614df1c-3f61-6bf5-5c3e-ee304895cfca/cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e9/e9/fe/e9e9fe96-1e92-5be7-c86e-860ed15e4eda/mzaf_18220541675883973002.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 246,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1481685076,
    "title": "Samajavaragamana (Ala Vaikunthapurramuloo)",
    "artist": "S.S. Thaman & Sid Sriram",
    "album": "Samajavaragamana (From \"Ala Vaikunthapurramuloo\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/53/98/c1/5398c1cf-7c16-24a6-bfa3-391dc6015376/cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/29/a7/55/29a75528-3808-d849-ad00-9e714bf12621/mzaf_2813549342968292058.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 220,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1419151804,
    "title": "Inkem Inkem Inkem Kaavaale",
    "artist": "Sid Sriram",
    "album": "Geetha Govindam (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/68/f1/52/68f1523b-3c40-f2cc-7d4a-376642897adb/cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6d/5a/f1/6d5af141-475c-7404-495c-0ef55283457c/mzaf_3028662401385709025.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 267,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1419152719,
    "title": "Vachindamma",
    "artist": "Sid Sriram",
    "album": "Geetha Govindam (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/68/f1/52/68f1523b-3c40-f2cc-7d4a-376642897adb/cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3b/a0/a1/3ba0a1ce-bf63-bbaf-48f6-48593c231168/mzaf_16000697806590920631.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 250,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1602184672,
    "title": "Oo Antava Oo Oo Antava",
    "artist": "Indravathi Chauhan",
    "album": "Pushpa - The Rise, Part. 01 (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ec/34/7b/ec347b9b-0add-c529-4746-799277a5e1c0/cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d5/f8/19/d5f8195c-8668-e1f3-fb59-77d8d35b1b53/mzaf_7616288806017835265.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 223,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1600673693,
    "title": "Srivalli",
    "artist": "Javed Ali",
    "album": "Pushpa the Rise Part - 01 (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7e/78/81/7e78812c-0445-ebad-321c-1beebaaa328a/8902894361460_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/10/b9/b4/10b9b422-924d-7327-3f1c-a7ec9e13d030/mzaf_4886192084825474906.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 224,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1841899064,
    "title": "Dheevara (English Version)",
    "artist": "Ramya Behara & Adithya",
    "album": "Baahubali - The Beginning (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1a/8e/da/1a8edac5-80a7-22aa-c014-f4f1a0190f7a/8905750011301.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b7/cc/7f/b7cc7f64-c817-ed4d-5805-2416b6cb20b1/mzaf_1582981193634746542.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 189,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1836160911,
    "title": "Saahore Baahubali",
    "artist": "Daler Mehndi, M.M. Keeravaani & Mounima Chandrabhatla",
    "album": "Baahubali 2 - The Conclusion (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a2/ed/f3/a2edf338-56ea-74ad-e52e-7187d81e0676/8905750037981.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/aa/27/a7/aa27a71c-8801-01b4-785a-7cb4e6ef3d63/mzaf_17959722908933129782.plus.aac.p.m4a",
    "category": "telugu",
    "duration": 212,
    "isSpatial": true,
    "colors": [
      "#ff2a85",
      "#ff9500",
      "#7928ca"
    ]
  },
  {
    "id": 1635014240,
    "title": "Kesariya (Brahmastra)",
    "artist": "Pritam, Arijit Singh & Amitabh Bhattacharya",
    "album": "Kesariya (From \"Brahmastra\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/13/ca/9f13ca3b-e533-03e0-f19a-f0aaa774581d/196589311191.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/4c/5c/384c5c8f-3ff8-e457-b2f7-3158ce108649/mzaf_12389299033886433185.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 268,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1638680267,
    "title": "Deva Deva (Brahmastra)",
    "artist": "Pritam, Arijit Singh, Amitabh Bhattacharya & Jonita Gandhi",
    "album": "Deva Deva (From \"Brahmastra\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/68/72/f9/6872f95d-9c56-beb8-2768-a5c07c304ee6/196589383044.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/24/61/2a/24612a7d-c42b-90a5-c980-07f4db2eee6f/mzaf_4575238190575326306.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 279,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1646762436,
    "title": "Rasiya (Brahmastra)",
    "artist": "Pritam, Shreya Ghoshal & Tushar Joshi",
    "album": "Rasiya (From \"Brahmastra\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c1/fc/e6/c1fce60c-c1f6-4904-6d61-02bb3ed0cfbd/196589505897.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c5/bd/4f/c5bd4f17-23ff-e2af-ccd0-b976985151a6/mzaf_6244821523021066334.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 265,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1705952066,
    "title": "Chaleya",
    "artist": "Anirudh Ravichander, Arijit Singh, Shilpa Rao & Kumaar",
    "album": "Jawan (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bb/f4/f5/bbf4f511-3c12-c25e-a475-b6d06faa8c13/8902894362047_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/76/05/d9/7605d905-f631-517d-df7f-e162affcd414/mzaf_9976541859961700749.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 200,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1705952062,
    "title": "Zinda Banda",
    "artist": "Anirudh Ravichander & Irshad Kamil",
    "album": "Jawan (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bb/f4/f5/bbf4f511-3c12-c25e-a475-b6d06faa8c13/8902894362047_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/eb/58/ed/eb58ed9b-034b-3068-0821-fa6bbd880283/mzaf_11886224066309929815.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 264,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1705952069,
    "title": "Jawan Title Track",
    "artist": "Anirudh Ravichander & Raja Kumari",
    "album": "Jawan (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bb/f4/f5/bbf4f511-3c12-c25e-a475-b6d06faa8c13/8902894362047_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/18/49/42/18494218-ee2e-6424-94b0-b91b35016737/mzaf_4123485183392209017.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 188,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1718278234,
    "title": "Pehle Bhi Main",
    "artist": "Vishal Mishra & Raj Shekhar",
    "album": "ANIMAL (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/db/ad/5e/dbad5e8b-0bee-d962-92d4-021c90e375ac/8902894362092_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3a/d8/43/3ad8432d-c2e6-052b-5679-cc01c6a599ea/mzaf_7941667053086496020.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 250,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1718278231,
    "title": "Satranga",
    "artist": "Arijit Singh, Shreyas Puranik & Siddharth-Garima",
    "album": "ANIMAL (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/db/ad/5e/dbad5e8b-0bee-d962-92d4-021c90e375ac/8902894362092_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f9/c4/db/f9c4db6d-efa0-0b8b-c80a-046b06499f2b/mzaf_3150095649021462379.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 271,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1718278228,
    "title": "Arjan Vailly",
    "artist": "Manan Bhardwaj & Bhupinder Babbal",
    "album": "ANIMAL (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/db/ad/5e/dbad5e8b-0bee-d962-92d4-021c90e375ac/8902894362092_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/52/4a/00/524a0053-71f4-a04f-fe2a-87a5b78bfeec/mzaf_1842370763618686453.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 182,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1718278230,
    "title": "Hua Main",
    "artist": "Raghav Chaitanya, Manoj Muntashir & Pritam",
    "album": "ANIMAL (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/db/ad/5e/dbad5e8b-0bee-d962-92d4-021c90e375ac/8902894362092_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c5/18/4b/c5184b91-7e03-b2e0-f0e9-3465533c8130/mzaf_2284209951580353883.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 277,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1653219849,
    "title": "Apna Bana Le (Bhediya)",
    "artist": "Arijit Singh, Sachin-Jigar & Amitabh Bhattacharya",
    "album": "Apna Bana Le (From \"Bhediya\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2e/0b/c0/2e0bc070-112f-a827-6ad8-6bc64f7caaff/840214460180.png/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/eb/27/61/eb2761c7-d606-0912-dff0-2dc6b69974bd/mzaf_2023722930851223219.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 262,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1073359419,
    "title": "Tum Hi Ho",
    "artist": "Mithoon & Arijit Singh",
    "album": "Aashiqui 2 (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3a/8c/9b/3a8c9b0b-2def-750a-f615-1555bf941edf/mzaf_17229496441442805917.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 262,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1073359420,
    "title": "Sunn Raha Hai",
    "artist": "Ankit Tiwari",
    "album": "Aashiqui 2 (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/69/db/59/69db5934-c0fc-5f4e-ca58-9a2b8b863927/mzaf_15086064680141028989.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 390,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1478998926,
    "title": "Ghungroo (War)",
    "artist": "Arijit Singh, Shilpa Rao & Vishal & Shekhar",
    "album": "Ghungroo (From \"War\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f4/0b/88/f40b88d5-75cb-27b8-6b00-bba98f0f2fd0/849486006911_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d1/90/95/d190958b-cb33-34b6-83d2-4d88b6ff1348/mzaf_8015651280578447253.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 303,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1481956482,
    "title": "Jai Jai Shivshankar",
    "artist": "Vishal & Shekhar, Vishal Dadlani & Benny Dayal",
    "album": "War (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/36/03/a0/3603a004-3288-484c-9783-305ffebc91ba/849486006348_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e4/8a/04/e48a0460-d925-765f-44cc-f70ae10eb4ed/mzaf_12027195161142657437.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 231,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1722326393,
    "title": "O Maahi",
    "artist": "Pritam, Arijit Singh & Irshad Kamil",
    "album": "Dunki (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cf/cf/af/cfcfaf49-f337-eeab-2351-dd0a137dc740/8902894362139_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a9/82/78/a9827837-5ca7-1fe3-fc24-3dedeffb86e4/mzaf_4678729972431007397.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 233,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1722326390,
    "title": "Lutt Putt Gaya",
    "artist": "Pritam, Arijit Singh, Swanand Kirkire & IP Singh",
    "album": "Dunki (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cf/cf/af/cfcfaf49-f337-eeab-2351-dd0a137dc740/8902894362139_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dc/ae/06/dcae0643-d788-cc23-28d7-24a6a5b76c5a/mzaf_11429627440494283323.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 223,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1659644978,
    "title": "Jhoome Jo Pathaan",
    "artist": "Vishal & Shekhar, Arijit Singh, Sukriti Kakar, Vishal Dadlani & Shekhar Ravjiani",
    "album": "Pathaan (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8d/6a/19/8d6a197e-2aaa-5504-cd43-533351597487/Pathaan-Album-Audio-Cover-Final.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/be/80/45/be8045ce-1ce5-b099-fc9d-7141b1d3d6f2/mzaf_10087280935419764280.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 208,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1659644977,
    "title": "Besharam Rang",
    "artist": "Vishal & Shekhar, Shilpa Rao, Caralisa Monteiro, Vishal Dadlani & Shekhar Ravjiani",
    "album": "Pathaan (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8d/6a/19/8d6a197e-2aaa-5504-cd43-533351597487/Pathaan-Album-Audio-Cover-Final.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/d5/fb/f8d5fb8e-ea86-4d56-32d4-28912d4623b9/mzaf_7899315727013580274.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 258,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1468448747,
    "title": "Bekhayali (Arijit Singh Version)",
    "artist": "Arijit Singh",
    "album": "Kabir Singh (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a7/d3/8e/a7d38e28-eeb8-8dcc-8649-47962c08b059/mzaf_13772178829674826873.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 370,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1468448742,
    "title": "Tujhe Kitna Chahne Lage",
    "artist": "Arijit Singh",
    "album": "Kabir Singh (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7e/f3/43/7ef34316-c0d1-4c3c-afc9-53716b8f3473/mzaf_13869194700915977502.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 285,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1762171380,
    "title": "Aayi Nai",
    "artist": "Pawan Singh, Simran Choudhary, Divya Kumar, Sachin-Jigar & Amitabh Bhattacharya",
    "album": "Stree 2 (Original Motion Picture Soundtrack) - EP",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d3/37/eb/d337eb52-2663-826d-d213-335598b14743/198846005553.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d0/d0/c1/d0d0c170-c509-a370-a333-076e2b6bb638/mzaf_13754655645459722294.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 179,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1759100524,
    "title": "Aaj Ki Raat (Stree 2)",
    "artist": "Madhubanti Bagchi, Divya Kumar, Sachin-Jigar & Amitabh Bhattacharya",
    "album": "Aaj Ki Raat (From \"Stree 2\") - Single",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3a/7f/47/3a7f47da-2330-c758-4460-ce12f9385a82/198588793954.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/71/53/54/71535490-31fe-a429-8113-4dbded06dd4d/mzaf_12311178644671562356.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 229,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1727072782,
    "title": "Sher Khul Gaye",
    "artist": "Vishal & Shekhar, Vishal Dadlani, Sheykhar Ravjiani, Benny Dayal, Shilpa Rao & Kumaar",
    "album": "Fighter (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fa/9d/5b/fa9d5b65-bf8e-1277-ff45-99057a5fb1a3/8902894362153_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/06/31/c1/0631c1ac-8860-0675-f20f-09ff1ad8abd9/mzaf_8297704023402523226.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 180,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1070912818,
    "title": "Kabira",
    "artist": "Pritam, Tochi Raina & Rekha Bhardwaj",
    "album": "Yeh Jawaani Hai Deewani (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/d6/74/62d67432-0670-631f-db6a-d4bac3adae4b/8902894353328_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e2/06/19/e2061998-6444-5c5b-5bfc-a149c55e2e2e/mzaf_10494977375651598168.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 223,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1070912810,
    "title": "Balam Pichkari",
    "artist": "Pritam, Vishal Dadlani & Shalmali Kholgade",
    "album": "Yeh Jawaani Hai Deewani (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/d6/74/62d67432-0670-631f-db6a-d4bac3adae4b/8902894353328_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d3/e7/d2/d3e7d290-b0bb-00b6-a4d9-311bab6e2363/mzaf_5724100094974808629.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 289,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  },
  {
    "id": 1070912815,
    "title": "Ilahi",
    "artist": "Pritam & Arijit Singh",
    "album": "Yeh Jawaani Hai Deewani (Original Motion Picture Soundtrack)",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/d6/74/62d67432-0670-631f-db6a-d4bac3adae4b/8902894353328_cover.jpg/600x600bb.jpg",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/75/27/64/75276455-6751-e9d7-1187-b863a2ffefbc/mzaf_4313837125483855343.plus.aac.p.m4a",
    "category": "hindi",
    "duration": 229,
    "isSpatial": true,
    "colors": [
      "#af52de",
      "#fa243c",
      "#007aff"
    ]
  }
];

  // Application State
  let playlist = [...MASTER_TRACKS];
  let currentTrackIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let repeatMode = 0; // 0: Off, 1: Repeat All, 2: Repeat One
  let favorites = new Set(JSON.parse(localStorage.getItem('music_z_favs') || '[]'));
  let isLyricsMode = false;
  let currentLangFilter = 'all';

  // Audio Element
  const audio = document.getElementById('native-audio');

  // DOM: Tabs & Navigation
  const tabButtons = document.querySelectorAll('.tab-item');
  const tabPages = document.querySelectorAll('.tab-page');
  const langPills = document.querySelectorAll('.lang-pill');

  // DOM: Mini Player
  const miniPlayer = document.getElementById('mini-player');
  const miniProgressFill = document.getElementById('mini-progress-fill');
  const miniArt = document.getElementById('mini-art');
  const miniTitle = document.getElementById('mini-title');
  const miniArtist = document.getElementById('mini-artist');
  const miniPlayPauseBtn = document.getElementById('mini-play-pause-btn');
  const miniPlayIcon = document.getElementById('mini-play-icon');
  const miniPauseIcon = document.getElementById('mini-pause-icon');
  const miniNextBtn = document.getElementById('mini-next-btn');
  const miniExpandTrigger = document.getElementById('mini-player-expand-trigger');

  // DOM: Expanded Now Playing Sheet
  const sheet = document.getElementById('now-playing-sheet');
  const sheetDismissBtn = document.getElementById('btn-sheet-dismiss');
  const sheetGrabberZone = document.getElementById('sheet-grabber-zone');
  const sheetArtBox = document.getElementById('sheet-art-box');
  const sheetArtImg = document.getElementById('sheet-art-img');
  const sheetTitle = document.getElementById('sheet-title');
  const sheetArtist = document.getElementById('sheet-artist');
  const sheetFavBtn = document.getElementById('sheet-fav-btn');
  const heartOutline = sheetFavBtn.querySelector('.heart-outline');
  const heartSolid = sheetFavBtn.querySelector('.heart-solid');

  // Seek Slider
  const seekSlider = document.getElementById('sheet-seek-slider');
  const seekFill = document.getElementById('sheet-seek-fill');
  const currentTimeLabel = document.getElementById('current-time-label');
  const totalTimeLabel = document.getElementById('total-time-label');

  // Playback Controls
  const mainPlayPauseBtn = document.getElementById('btn-main-play-pause');
  const sheetPlayIcon = document.getElementById('sheet-play-icon');
  const sheetPauseIcon = document.getElementById('sheet-pause-icon');
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const shuffleBtn = document.getElementById('btn-shuffle');
  const repeatBtn = document.getElementById('btn-repeat');
  const repeatOneBadge = document.getElementById('repeat-one-badge');

  // Volume
  const volumeSlider = document.getElementById('sheet-volume-slider');
  const volumeFill = document.getElementById('sheet-volume-fill');

  // Bottom Action Buttons
  const btnToggleLyrics = document.getElementById('btn-toggle-lyrics');
  const sheetArtworkView = document.getElementById('sheet-artwork-view');
  const sheetLyricsView = document.getElementById('sheet-lyrics-view');
  const lyricsScrollWrapper = document.getElementById('lyrics-scroll-wrapper');
  const btnAirplay = document.getElementById('btn-airplay');
  const airplayLabel = document.getElementById('airplay-label');
  const btnToggleQueue = document.getElementById('btn-toggle-queue');

  // Submodals
  const queueSubmodal = document.getElementById('queue-submodal');
  const btnCloseQueue = document.getElementById('btn-close-queue');
  const queueListContainer = document.getElementById('queue-list-container');
  const btnShuffleQueue = document.getElementById('btn-shuffle-queue');
  const queueCount = document.getElementById('queue-count');

  const shareplaySubmodal = document.getElementById('shareplay-submodal');
  const btnHeaderShareplay = document.getElementById('btn-header-shareplay');
  const btnSheetShareplay = document.getElementById('btn-sheet-shareplay');
  const btnCloseShareplay = document.getElementById('btn-close-shareplay');
  const btnCopyShareplay = document.getElementById('btn-copy-shareplay');
  const shareplayLinkInput = document.getElementById('shareplay-link-input');

  const airplaySubmodal = document.getElementById('airplay-submodal');
  const btnCloseAirplay = document.getElementById('btn-close-airplay');
  const airplayRows = document.querySelectorAll('.airplay-row');

  const eqSubmodal = document.getElementById('eq-submodal');
  const btnEqToggle = document.getElementById('btn-eq-toggle');
  const btnCloseEq = document.getElementById('btn-close-eq');
  const spatialSwitch = document.getElementById('toggle-spatial-switch');
  const eqPresetBtns = document.querySelectorAll('.eq-preset-btn');

  // Search & Library
  const searchInput = document.getElementById('search-input');
  const searchSpinner = document.getElementById('search-spinner');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchTrackList = document.getElementById('search-track-list');
  const searchTags = document.querySelectorAll('.search-tag');
  const localMusicInput = document.getElementById('local-music-input');
  const toast = document.getElementById('ios-toast');
  const emojiLayer = document.getElementById('emoji-reaction-layer');

  // Web Audio Context
  let audioCtx = null;
  let sourceNode = null;
  let analyserNode = null;
  let bassFilter = null;
  let midFilter = null;
  let trebleFilter = null;
  let isWebAudioInitialized = false;
  let currentBassEnergy = 0;

  // Visualizer Canvases
  const ambientCanvas = document.getElementById('ambient-canvas');
  const sheetAmbientCanvas = document.getElementById('sheet-ambient-canvas');
  const visualizerCanvas = document.getElementById('audio-visualizer-canvas');
  let ambientCtx = ambientCanvas.getContext('2d');
  let sheetAmbientCtx = sheetAmbientCanvas.getContext('2d');
  let visualizerCtx = visualizerCanvas.getContext('2d');

  // Fluid Mesh Animation Blobs (Audio Reactive)
  let blobs = [
    { x: 0.28, y: 0.22, vx: 0.0012, vy: 0.0015, baseR: 0.45 },
    { x: 0.72, y: 0.28, vx: -0.0014, vy: 0.0011, baseR: 0.50 },
    { x: 0.38, y: 0.78, vx: 0.0013, vy: -0.0014, baseR: 0.42 },
    { x: 0.82, y: 0.72, vx: -0.0011, vy: -0.0013, baseR: 0.40 }
  ];
  let currentColors = ["#fa243c", "#ff9500", "#7928ca"];
  let targetColors = ["#fa243c", "#ff9500", "#7928ca"];

  function resizeCanvases() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ambientCanvas.width = w / 2;
    ambientCanvas.height = h / 2;
    sheetAmbientCanvas.width = w / 2;
    sheetAmbientCanvas.height = h / 2;

    const dpr = window.devicePixelRatio || 1;
    visualizerCanvas.width = visualizerCanvas.offsetWidth * dpr;
    visualizerCanvas.height = visualizerCanvas.offsetHeight * dpr;
  }
  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();

  function animateLiquidMesh() {
    for (let c = 0; c < 3; c++) {
      currentColors[c] = targetColors[c];
    }
    const w = ambientCanvas.width;
    const h = ambientCanvas.height;

    // React to real bass energy
    const pulseFactor = 1 + (currentBassEnergy * 0.35);

    [ambientCtx, sheetAmbientCtx].forEach(ctx => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#06060a';
      ctx.fillRect(0, 0, w, h);

      blobs.forEach((b, idx) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0.1 || b.x > 0.9) b.vx *= -1;
        if (b.y < 0.1 || b.y > 0.9) b.vy *= -1;

        const effectiveR = b.baseR * pulseFactor;
        const grad = ctx.createRadialGradient(
          b.x * w, b.y * h, 10,
          b.x * w, b.y * h, effectiveR * Math.max(w, h)
        );
        const col = currentColors[idx % currentColors.length];
        grad.addColorStop(0, hexToRgba(col, 0.46));
        grad.addColorStop(0.65, hexToRgba(col, 0.16));
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x * w, b.y * h, effectiveR * Math.max(w, h), 0, Math.PI * 2);
        ctx.fill();
      });
    });

    requestAnimationFrame(animateLiquidMesh);
  }
  requestAnimationFrame(animateLiquidMesh);

  function hexToRgba(hex, alpha) {
    if (!hex || hex[0] !== '#') return `rgba(250, 36, 60, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // --- Web Audio Engine & Equalizer ---
  function initAudioContext() {
    if (isWebAudioInitialized) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      analyserNode = audioCtx.createAnalyser();
      analyserNode.fftSize = 64;

      bassFilter = audioCtx.createBiquadFilter();
      bassFilter.type = 'lowshelf';
      bassFilter.frequency.value = 250;
      bassFilter.gain.value = 0;

      midFilter = audioCtx.createBiquadFilter();
      midFilter.type = 'peaking';
      midFilter.frequency.value = 1500;
      midFilter.gain.value = 0;

      trebleFilter = audioCtx.createBiquadFilter();
      trebleFilter.type = 'highshelf';
      trebleFilter.frequency.value = 4000;
      trebleFilter.gain.value = 0;

      sourceNode = audioCtx.createMediaElementSource(audio);
      sourceNode.connect(bassFilter);
      bassFilter.connect(midFilter);
      midFilter.connect(trebleFilter);
      trebleFilter.connect(analyserNode);
      analyserNode.connect(audioCtx.destination);

      isWebAudioInitialized = true;
      drawVisualizerSpectrum();
    } catch (e) {
      console.warn("Web Audio API:", e);
    }
  }

  function drawVisualizerSpectrum() {
    requestAnimationFrame(drawVisualizerSpectrum);
    if (!analyserNode || !isPlaying) {
      currentBassEnergy = 0;
      visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
      return;
    }

    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);

    // Calculate bass energy from first 4 bins
    let bassSum = 0;
    for (let i = 0; i < 4; i++) bassSum += dataArray[i];
    currentBassEnergy = (bassSum / (4 * 255));

    const w = visualizerCanvas.width;
    const h = visualizerCanvas.height;
    visualizerCtx.clearRect(0, 0, w, h);

    const barWidth = (w / bufferLength) * 1.8;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * h;
      const grad = visualizerCtx.createLinearGradient(0, h - barHeight, 0, h);
      grad.addColorStop(0, 'rgba(250, 36, 60, 0.95)');
      grad.addColorStop(1, 'rgba(175, 82, 222, 0.4)');
      
      visualizerCtx.fillStyle = grad;
      visualizerCtx.beginPath();
      visualizerCtx.roundRect(x, h - barHeight, Math.max(2, barWidth - 2), barHeight, 2);
      visualizerCtx.fill();

      x += barWidth + 2;
    }
  }

  // --- Load and Play Track ---
  function loadTrack(index, autoPlay = true) {
    if (index < 0) index = playlist.length - 1;
    if (index >= playlist.length) index = 0;
    currentTrackIndex = index;
    const track = playlist[index];

    audio.src = track.audioUrl;
    targetColors = track.colors || ["#fa243c", "#ff9500", "#7928ca"];

    // Update Mini Player
    miniArt.src = track.cover;
    miniTitle.textContent = track.title;
    miniArtist.textContent = track.artist;

    // Update Expanded Sheet
    sheetArtImg.src = track.cover;
    sheetTitle.textContent = track.title;
    sheetArtist.textContent = track.artist;

    updateFavButton();
    renderLyrics(track.title, track.artist, track.album);

    document.querySelectorAll('.track-row').forEach(row => {
      row.classList.toggle('active', parseInt(row.dataset.id) === track.id);
    });

    // Update SharePlay link
    shareplayLinkInput.value = `https://adityakasara.github.io/Music_Z/?track=${track.id}`;

    if (autoPlay) {
      playAudio();
    }
  }

  function playAudio() {
    initAudioContext();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    audio.play().then(() => {
      isPlaying = true;
      updatePlayPauseUI(true);
    }).catch(err => {
      console.warn("Autoplay:", err);
      isPlaying = false;
      updatePlayPauseUI(false);
    });
  }

  function pauseAudio() {
    audio.pause();
    isPlaying = false;
    updatePlayPauseUI(false);
  }

  function togglePlayPause() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  function updatePlayPauseUI(playing) {
    if (playing) {
      miniPlayIcon.style.display = 'none';
      miniPauseIcon.style.display = 'block';
      sheetPlayIcon.style.display = 'none';
      sheetPauseIcon.style.display = 'block';
      sheetArtBox.classList.remove('paused');
      sheetArtBox.classList.add('playing');
    } else {
      miniPlayIcon.style.display = 'block';
      miniPauseIcon.style.display = 'none';
      sheetPlayIcon.style.display = 'block';
      sheetPauseIcon.style.display = 'none';
      sheetArtBox.classList.remove('playing');
      sheetArtBox.classList.add('paused');
    }
  }

  function nextTrack() {
    if (isShuffle) {
      let randIndex;
      do {
        randIndex = Math.floor(Math.random() * playlist.length);
      } while (randIndex === currentTrackIndex && playlist.length > 1);
      loadTrack(randIndex, true);
    } else {
      loadTrack(currentTrackIndex + 1, true);
    }
  }

  function prevTrack() {
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      loadTrack(currentTrackIndex - 1, true);
    }
  }

  // --- Repeat Mode: 3-State Cycle (Off -> All -> One) ---
  repeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatUI();
    showToast(repeatMode === 2 ? 'Repeat: One Song' : (repeatMode === 1 ? 'Repeat: All Songs' : 'Repeat: Off'));
  });

  function updateRepeatUI() {
    if (repeatMode === 0) {
      repeatBtn.classList.remove('active');
      repeatOneBadge.style.display = 'none';
    } else if (repeatMode === 1) {
      repeatBtn.classList.add('active');
      repeatOneBadge.style.display = 'none';
    } else if (repeatMode === 2) {
      repeatBtn.classList.add('active');
      repeatOneBadge.style.display = 'flex';
    }
  }

  // --- Audio Ended Handler with Repeat Logic ---
  audio.addEventListener('ended', () => {
    if (repeatMode === 2) {
      audio.currentTime = 0;
      playAudio();
    } else if (repeatMode === 1) {
      nextTrack();
    } else {
      // Repeat Off: Stop if at end of playlist
      if (currentTrackIndex < playlist.length - 1) {
        nextTrack();
      } else {
        pauseAudio();
        audio.currentTime = 0;
      }
    }
  });

  // --- Scrubber & Time Updates ---
  audio.addEventListener('timeupdate', () => {
    const cur = audio.currentTime;
    const dur = audio.duration || playlist[currentTrackIndex]?.duration || 1;
    const pct = (cur / dur) * 100;

    miniProgressFill.style.width = `${pct}%`;
    seekSlider.value = pct;
    seekFill.style.width = `${pct}%`;

    currentTimeLabel.textContent = formatTime(cur);
    totalTimeLabel.textContent = formatTime(dur);

    updateLyricsSync(cur);
  });

  seekSlider.addEventListener('input', (e) => {
    const dur = audio.duration || playlist[currentTrackIndex]?.duration || 1;
    const target = (e.target.value / 100) * dur;
    audio.currentTime = target;
    seekFill.style.width = `${e.target.value}%`;
  });

  volumeSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    audio.volume = val;
    volumeFill.style.width = `${val * 100}%`;
  });
  volumeFill.style.width = `${volumeSlider.value * 100}%`;

  // Controls Event Listeners
  miniPlayPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlayPause();
  });
  miniNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextTrack();
  });
  mainPlayPauseBtn.addEventListener('click', togglePlayPause);
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);

  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
    showToast(isShuffle ? 'Shuffle: On' : 'Shuffle: Off');
  });

  // --- Expanded Now Playing Sheet Animations & Drag Gestures ---
  miniExpandTrigger.addEventListener('click', () => {
    sheet.classList.add('expanded');
  });

  sheetDismissBtn.addEventListener('click', () => {
    sheet.classList.remove('expanded');
  });

  let touchStartY = 0;
  sheetGrabberZone.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  sheetGrabberZone.addEventListener('touchmove', (e) => {
    const deltaY = e.touches[0].clientY - touchStartY;
    if (deltaY > 60) {
      sheet.classList.remove('expanded');
    }
  }, { passive: true });

  // --- Kinetic Karaoke Lyrics View ---
  function renderLyrics(title, artist, album) {
    lyricsScrollWrapper.innerHTML = '';
    const lyricsData = [
      { time: 0.0, text: title },
      { time: 4.0, text: `Sung by ${artist}` },
      { time: 8.5, text: `From the blockbuster ${album}` },
      { time: 13.0, text: "Streaming in Apple Spatial Lossless Audio" },
      { time: 17.5, text: "Vocal resonance & dynamic beat" },
      { time: 22.0, text: "Feel every rhythm and cinematic chord" },
      { time: 26.5, text: "Music Z • Premium Apple Experience" }
    ];

    lyricsData.forEach((item) => {
      const line = document.createElement('div');
      line.className = 'lyric-line';
      line.textContent = item.text;
      line.dataset.time = item.time;

      line.addEventListener('click', () => {
        audio.currentTime = item.time;
        if (!isPlaying) playAudio();
      });

      lyricsScrollWrapper.appendChild(line);
    });
  }

  function updateLyricsSync(currentTime) {
    if (!isLyricsMode) return;
    const lines = lyricsScrollWrapper.querySelectorAll('.lyric-line');
    if (!lines.length) return;

    let activeIndex = -1;
    lines.forEach((line, idx) => {
      const time = parseFloat(line.dataset.time || 0);
      if (currentTime >= time) activeIndex = idx;
    });

    lines.forEach((line, idx) => {
      if (idx === activeIndex) {
        if (!line.classList.contains('active')) {
          line.classList.add('active');
          line.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        line.classList.remove('active');
      }
    });
  }

  btnToggleLyrics.addEventListener('click', () => {
    isLyricsMode = !isLyricsMode;
    btnToggleLyrics.classList.toggle('active', isLyricsMode);
    if (isLyricsMode) {
      sheetArtworkView.classList.remove('active');
      sheetLyricsView.classList.add('active');
      updateLyricsSync(audio.currentTime);
    } else {
      sheetLyricsView.classList.remove('active');
      sheetArtworkView.classList.add('active');
    }
  });

  // --- SharePlay Live Session & Reactions ---
  [btnHeaderShareplay, btnSheetShareplay].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        shareplaySubmodal.classList.add('open');
      });
    }
  });

  btnCloseShareplay.addEventListener('click', () => {
    shareplaySubmodal.classList.remove('open');
  });

  btnCopyShareplay.addEventListener('click', () => {
    const link = shareplayLinkInput.value;
    if (navigator.share) {
      navigator.share({
        title: `Listen to ${playlist[currentTrackIndex].title} on Music Z`,
        text: `Join my Apple Music SharePlay session on Music Z!`,
        url: link
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(link).then(() => {
        showToast("SharePlay Link Copied!");
      });
    }
  });

  // Emoji Reactions (Float Up Animation)
  document.querySelectorAll('.reaction-emoji-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const emoji = btn.dataset.emoji;
      triggerFloatingReaction(emoji);
    });
  });

  function triggerFloatingReaction(emoji) {
    const el = document.createElement('div');
    el.className = 'floating-reaction-emoji';
    el.textContent = emoji;
    const randomLeft = 20 + Math.random() * 60;
    const randomRot = (Math.random() * 40 - 20) + 'deg';
    const randomRotEnd = (Math.random() * 60 - 30) + 'deg';
    
    el.style.left = `${randomLeft}%`;
    el.style.setProperty('--rot', randomRot);
    el.style.setProperty('--rot-end', randomRotEnd);

    emojiLayer.appendChild(el);
    setTimeout(() => {
      el.remove();
    }, 2300);
  }

  // --- AirPlay Audio Output Selector ---
  btnAirplay.addEventListener('click', () => {
    airplaySubmodal.classList.add('open');
  });

  btnCloseAirplay.addEventListener('click', () => {
    airplaySubmodal.classList.remove('open');
  });

  airplayRows.forEach(row => {
    row.addEventListener('click', () => {
      airplayRows.forEach(r => {
        r.classList.remove('active');
        r.querySelector('.airplay-check').textContent = '';
      });
      row.classList.add('active');
      row.querySelector('.airplay-check').textContent = '✓';
      const devName = row.dataset.device;
      airplayLabel.textContent = devName;
      showToast(`Connected to ${devName}`);
      setTimeout(() => {
        airplaySubmodal.classList.remove('open');
      }, 350);
    });
  });

  // --- Up Next Queue Modal ---
  btnToggleQueue.addEventListener('click', () => {
    renderQueueList();
    queueSubmodal.classList.add('open');
  });

  btnCloseQueue.addEventListener('click', () => {
    queueSubmodal.classList.remove('open');
  });

  btnShuffleQueue.addEventListener('click', () => {
    // Shuffle remaining tracks after current
    const current = playlist[currentTrackIndex];
    let rest = playlist.filter((_, idx) => idx !== currentTrackIndex);
    for (let i = rest.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }
    playlist = [current, ...rest];
    currentTrackIndex = 0;
    renderQueueList();
    showToast("Queue Shuffled!");
  });

  function renderQueueList() {
    queueListContainer.innerHTML = '';
    queueCount.textContent = playlist.length;
    playlist.forEach((track, index) => {
      queueListContainer.appendChild(createTrackRow(track, index));
    });
  }

  // --- Equalizer & Spatial Audio ---
  btnEqToggle.addEventListener('click', () => {
    eqSubmodal.classList.add('open');
  });
  btnCloseEq.addEventListener('click', () => {
    eqSubmodal.classList.remove('open');
  });

  spatialSwitch.addEventListener('change', (e) => {
    const enabled = e.target.checked;
    document.getElementById('spatial-indicator').style.display = enabled ? 'inline-block' : 'none';
    showToast(enabled ? 'Spatial Audio: Enabled' : 'Spatial Audio: Disabled');
  });

  eqPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      eqPresetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyEqPreset(btn.dataset.preset);
      showToast(`Preset: ${btn.textContent}`);
    });
  });

  function applyEqPreset(preset) {
    if (!bassFilter) return;
    if (preset === 'bass') {
      bassFilter.gain.value = 9; midFilter.gain.value = 0; trebleFilter.gain.value = 1;
    } else if (preset === 'vocal') {
      bassFilter.gain.value = -2; midFilter.gain.value = 6; trebleFilter.gain.value = 3;
    } else if (preset === 'electronic') {
      bassFilter.gain.value = 7; midFilter.gain.value = -2; trebleFilter.gain.value = 6;
    } else if (preset === 'acoustic') {
      bassFilter.gain.value = 3; midFilter.gain.value = 3; trebleFilter.gain.value = 4;
    } else if (preset === 'treble') {
      bassFilter.gain.value = -4; midFilter.gain.value = 1; trebleFilter.gain.value = 8;
    } else {
      bassFilter.gain.value = 0; midFilter.gain.value = 0; trebleFilter.gain.value = 0;
    }
  }

  // --- Favorite Toggle ---
  sheetFavBtn.addEventListener('click', () => {
    const track = playlist[currentTrackIndex];
    if (favorites.has(track.id)) {
      favorites.delete(track.id);
      showToast('Removed from Favorites');
    } else {
      favorites.add(track.id);
      showToast('Added to Favorites ❤️');
      triggerFloatingReaction('❤️');
    }
    localStorage.setItem('music_z_favs', JSON.stringify([...favorites]));
    updateFavButton();
    renderLibraryTracks();
  });

  function updateFavButton() {
    const track = playlist[currentTrackIndex];
    const isFav = favorites.has(track.id);
    heartOutline.style.display = isFav ? 'none' : 'block';
    heartSolid.style.display = isFav ? 'block' : 'none';
  }

  // --- Tab Navigation ---
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPages.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPage = document.getElementById(targetId);
      if (targetPage) targetPage.classList.add('active');
      document.getElementById('content-scroll').scrollTop = 0;
    });
  });

  document.getElementById('btn-play-radio-1').addEventListener('click', () => {
    loadTrack(0, true);
  });

  // --- Render Catalog Sections ---
  function renderAll() {
    renderHeroCarousel();
    renderLanguageSections();
    renderHeavyRotation();
    renderBrowseTracks();
    renderRadioStations();
    renderLibraryTracks();
    updateLibraryCounts();
  }

  function updateLibraryCounts() {
    document.getElementById('lib-count-all').textContent = playlist.length;
    document.getElementById('lib-count-telugu').textContent = playlist.filter(t => t.category === 'telugu').length;
    document.getElementById('lib-count-hindi').textContent = playlist.filter(t => t.category === 'hindi').length;
    document.getElementById('lib-count-favs').textContent = favorites.size;
  }

  function renderHeroCarousel() {
    const carousel = document.getElementById('hero-carousel');
    carousel.innerHTML = '';

    const heroTracks = playlist.slice(0, 4);
    heroTracks.forEach((track, idx) => {
      const card = document.createElement('div');
      card.className = 'hero-card';
      card.innerHTML = `
        <div class="hero-card-art-wrap">
          <img src="${track.cover}" alt="${track.title}" class="hero-art-img">
          <div class="hero-glass-badge">${track.category.toUpperCase()} HIT</div>
        </div>
        <div class="hero-meta">
          <span class="hero-subtitle">NOW STREAMING • ${track.artist.toUpperCase()}</span>
          <h2 class="hero-title">${track.title}</h2>
          <p class="hero-desc">${track.album} • Lossless Spatial Audio</p>
          <button class="hero-play-pill-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Play</span>
          </button>
        </div>
      `;
      card.querySelector('.hero-play-pill-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        loadTrack(idx, true);
      });
      card.addEventListener('click', () => {
        loadTrack(idx, true);
      });
      carousel.appendChild(card);
    });
  }

  function renderLanguageSections() {
    const teluguRow = document.getElementById('telugu-row');
    const hindiRow = document.getElementById('hindi-row');
    teluguRow.innerHTML = '';
    hindiRow.innerHTML = '';

    playlist.filter(t => t.category === 'telugu').forEach(track => {
      const idx = playlist.indexOf(track);
      teluguRow.appendChild(createCard(track, idx));
    });

    playlist.filter(t => t.category === 'hindi').forEach(track => {
      const idx = playlist.indexOf(track);
      hindiRow.appendChild(createCard(track, idx));
    });
  }

  function renderHeavyRotation() {
    const heavyGrid = document.getElementById('heavy-rotation-grid');
    heavyGrid.innerHTML = '';
    playlist.slice(0, 10).forEach(track => {
      const idx = playlist.indexOf(track);
      heavyGrid.appendChild(createCard(track, idx));
    });
  }

  function renderBrowseTracks() {
    const browseList = document.getElementById('browse-track-list');
    browseList.innerHTML = '';
    playlist.slice(0, 12).forEach(track => {
      const idx = playlist.indexOf(track);
      browseList.appendChild(createTrackRow(track, idx));
    });
  }

  function renderRadioStations() {
    const radioRow = document.getElementById('radio-stations-row');
    radioRow.innerHTML = '';
    playlist.slice(0, 8).forEach(track => {
      const idx = playlist.indexOf(track);
      radioRow.appendChild(createCard(track, idx));
    });
  }

  function createCard(track, index) {
    const card = document.createElement('div');
    card.className = 'track-card';
    card.innerHTML = `
      <div class="card-art-box">
        <img src="${track.cover}" alt="${track.title}" class="card-art-img" loading="lazy">
        <span class="card-lang-tag">${track.category}</span>
        <div class="card-play-hover">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <polygon points="6 4 18 12 6 20 6 4"></polygon>
          </svg>
        </div>
      </div>
      <div class="card-title">${track.title}</div>
      <div class="card-artist">${track.artist}</div>
    `;
    card.addEventListener('click', () => {
      loadTrack(index, true);
    });
    return card;
  }

  function createTrackRow(track, index) {
    const row = document.createElement('div');
    row.className = `track-row ${index === currentTrackIndex ? 'active' : ''}`;
    row.dataset.id = track.id;
    
    let langBadge = '';
    if (track.category === 'telugu') {
      langBadge = '<span class="telugu-tag-tiny">TELUGU</span>';
    } else if (track.category === 'hindi') {
      langBadge = '<span class="hindi-tag-tiny">HINDI</span>';
    }

    row.innerHTML = `
      <div class="track-row-art">
        <img src="${track.cover}" alt="${track.title}" loading="lazy">
      </div>
      <div class="track-row-info">
        <div class="track-row-title">${track.title}</div>
        <div class="track-row-meta">
          <span>${track.artist}</span>
          ${langBadge}
          <span class="spatial-badge-tiny">LOSSLESS</span>
        </div>
      </div>
      <button class="track-row-more">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="19" cy="12" r="2"></circle>
          <circle cx="5" cy="12" r="2"></circle>
        </svg>
      </button>
    `;
    row.addEventListener('click', () => {
      loadTrack(index, true);
    });
    return row;
  }

  function renderLibraryTracks(filter = 'all') {
    const libList = document.getElementById('library-track-list');
    libList.innerHTML = '';
    
    let filtered = playlist;
    if (filter === 'favorite') {
      filtered = playlist.filter(t => favorites.has(t.id));
    } else if (filter === 'telugu') {
      filtered = playlist.filter(t => t.category === 'telugu');
    } else if (filter === 'hindi') {
      filtered = playlist.filter(t => t.category === 'hindi');
    }

    if (filtered.length === 0) {
      libList.innerHTML = '<div style="padding:24px; text-align:center; color:rgba(255,255,255,0.4);">No songs in this view.</div>';
      return;
    }

    filtered.forEach((track) => {
      const idx = playlist.indexOf(track);
      libList.appendChild(createTrackRow(track, idx));
    });
  }

  // Language Filter Pills
  langPills.forEach(pill => {
    pill.addEventListener('click', () => {
      langPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const lang = pill.dataset.lang;
      currentLangFilter = lang;

      const secTelugu = document.getElementById('section-telugu-block');
      const secHindi = document.getElementById('section-hindi-block');

      if (lang === 'telugu') {
        secTelugu.style.display = 'block';
        secHindi.style.display = 'none';
      } else if (lang === 'hindi') {
        secTelugu.style.display = 'none';
        secHindi.style.display = 'block';
      } else if (lang === 'favorites') {
        document.querySelector('[data-tab="tab-library"]').click();
        renderLibraryTracks('favorite');
      } else {
        secTelugu.style.display = 'block';
        secHindi.style.display = 'block';
      }
    });
  });

  document.querySelectorAll('.library-row-item').forEach(item => {
    item.addEventListener('click', () => {
      renderLibraryTracks(item.dataset.libFilter);
    });
  });

  // --- Live iTunes API Search Engine ---
  let searchDebounceTimer = null;

  async function performLiveSearch(query) {
    if (!query) {
      renderDefaultSearchResults();
      return;
    }

    // Filter local catalog first
    const qLower = query.toLowerCase();
    const localMatches = playlist.filter(t => 
      t.title.toLowerCase().includes(qLower) || 
      t.artist.toLowerCase().includes(qLower) ||
      t.album.toLowerCase().includes(qLower)
    );

    searchTrackList.innerHTML = '';
    localMatches.forEach(t => {
      const idx = playlist.indexOf(t);
      searchTrackList.appendChild(createTrackRow(t, idx));
    });

    // If local matches are few or user is looking for more, fetch from live Apple Music API
    searchSpinner.style.display = 'inline-block';

    try {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=25`;
      const response = await fetch(url);
      const data = await response.json();
      
      searchSpinner.style.display = 'none';

      if (data.results && data.results.length > 0) {
        data.results.forEach(item => {
          if (!item.previewUrl) return;
          if (playlist.some(p => p.id === item.trackId)) return; // already in local list

          const art = (item.artworkUrl100 || '').replace('100x100bb', '600x600bb');
          const isTelugu = item.primaryGenreName?.includes('Telugu') || qLower.includes('telugu');
          const isHindi = item.primaryGenreName?.includes('Bollywood') || qLower.includes('hindi');

          const trackObj = {
            id: item.trackId,
            title: item.trackName,
            artist: item.artistName,
            album: item.collectionName || 'Single',
            cover: art,
            audioUrl: item.previewUrl,
            category: isTelugu ? 'telugu' : (isHindi ? 'hindi' : 'live'),
            duration: Math.round((item.trackTimeMillis || 30000) / 1000),
            isSpatial: true,
            colors: ["#fa243c", "#007aff", "#af52de"]
          };

          playlist.push(trackObj);
          const idx = playlist.length - 1;
          searchTrackList.appendChild(createTrackRow(trackObj, idx));
        });
      }
    } catch (e) {
      searchSpinner.style.display = 'none';
    }
  }

  function renderDefaultSearchResults() {
    searchTrackList.innerHTML = '';
    playlist.forEach((track, idx) => {
      searchTrackList.appendChild(createTrackRow(track, idx));
    });
  }

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    searchClearBtn.style.display = q ? 'flex' : 'none';
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      performLiveSearch(q);
    }, 300);
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
    renderDefaultSearchResults();
  });

  searchTags.forEach(tag => {
    tag.addEventListener('click', () => {
      searchTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      const q = tag.dataset.query;
      if (q === 'all') {
        searchInput.value = '';
        renderDefaultSearchResults();
      } else {
        searchInput.value = q;
        searchClearBtn.style.display = 'flex';
        performLiveSearch(q);
      }
    });
  });

  // Browse category card clicks
  document.querySelectorAll('.browse-cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;
      document.querySelector('[data-tab="tab-search"]').click();
      searchInput.value = filter;
      searchClearBtn.style.display = 'flex';
      performLiveSearch(filter);
    });
  });

  // Custom File Import
  localMusicInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach((file, i) => {
      const url = URL.createObjectURL(file);
      const nameParts = file.name.replace(/\.[^/.]+$/, "").split(" - ");
      const artist = nameParts.length > 1 ? nameParts[0].trim() : "Local Audio";
      const title = nameParts.length > 1 ? nameParts[1].trim() : nameParts[0].trim();

      const newTrack = {
        id: Date.now() + i,
        title: title,
        artist: artist,
        album: "iPhone Files",
        cover: "assets/covers/neon_horizon.jpg",
        audioUrl: url,
        category: "local",
        duration: 0,
        colors: ["#fa243c", "#007aff", "#af52de"],
        isSpatial: true
      };

      playlist.unshift(newTrack);
    });

    renderAll();
    loadTrack(0, true);
    document.querySelector('[data-tab="tab-library"]').click();
    showToast(`${files.length} song(s) imported!`);
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === 'ArrowRight') {
      audio.currentTime = Math.min(audio.currentTime + 5, audio.duration || 999);
    } else if (e.code === 'ArrowLeft') {
      audio.currentTime = Math.max(audio.currentTime - 5, 0);
    }
  });

  // Toast Helper
  let toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Boot Application
  renderAll();
  renderDefaultSearchResults();
  loadTrack(0, false);
});
