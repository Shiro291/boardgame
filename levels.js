const levels = {
    level1: [
        // 1. Start Tile
        {
            type: 'start',
            content: 'Selamat datang di dunia energi! 🌍⚡',
            icon: '🏁'
        },
        // 2. Basic Definition
        {
            type: 'info',
            content: 'Energi adalah kemampuan untuk melakukan usaha atau menghasilkan perubahan.',
            icon: '⚡',
            example: 'Contoh: Lampu menyala karena energi listrik.'
        },
        // 3. Quiz: Energy Sources
        {
            type: 'quiz',
            question: 'Mana yang termasuk sumber energi?',
            options: [
                { text: 'Batu', correct: false },
                { text: 'Matahari', correct: true },
                { text: 'Kertas', correct: false }
            ],
            icon: '☀️'
        },
        // 4. Solar Energy
        {
            type: 'info',
            content: 'Matahari adalah sumber energi terbesar di bumi.',
            icon: '☀️',
            example: 'Energi matahari digunakan untuk fotosintesis tumbuhan.'
        },
        // 5. Home Energy Challenge (Converted to Quiz)
        {
            type: 'quiz',
            question: 'Sebutkan 3 sumber energi yang ada di rumahmu!',
            options: [
                { text: 'Listrik, Baterai, Kompor Gas', correct: true },
                { text: 'Solar, Wind, Hydro', correct: false },
                { text: 'Coal, Oil, Gasoline', correct: false }
            ],
            icon: '🏠'
        },
        // 6. Reward 1
        {
            type: 'reward',
            content: '+10 Poin! 🌟 Sumber energi di rumah: Listrik, Baterai, Kompor.',
            icon: '⭐'
        },
        // 7. Forms of Energy
        {
            type: 'info',
            content: 'Bentuk energi: Cahaya 💡, Panas 🔥, Bunyi 🔊, Gerak 🚴♀️, Listrik ⚡',
            icon: '🌈'
        },
        // 8. Quiz: Heat Energy
        {
            type: 'quiz',
            question: 'Contoh energi panas adalah...',
            options: [
                { text: 'Lampu menyala', correct: false },
                { text: 'Api lilin', correct: true },
                { text: 'Kipas angin', correct: false }
            ],
            icon: '🔥'
        },
        // 9. Energy Matching Challenge (Converted to Info)
        {
            type: 'info',
            content: 'Pasangkan bentuk energi dengan contoh:',
            pairs: [
                { form: 'Cahaya', example: 'Lampu' },
                { form: 'Gerak', example: 'Kipas Angin' },
                { form: 'Bunyi', example: 'Radio' }
            ],
            icon: '🔗'
        },
        // 10. Reward 2
        {
            type: 'reward',
            content: '+15 Poin! 🎉 Kamu menguasai bentuk energi!',
            icon: '🎊'
        },
        // 11. Electrical Energy
        {
            type: 'info',
            content: 'Energi listrik bisa diubah menjadi bentuk energi lain.',
            icon: '💡',
            example: 'Contoh: Lampu (listrik → cahaya)'
        },
        // 12. Quiz: Electrical Devices
        {
            type: 'quiz',
            question: 'Alat yang menggunakan energi listrik?',
            options: [
                { text: 'Kayu bakar', correct: false },
                { text: 'Senter', correct: true },
                { text: 'Sepeda', correct: false }
            ],
            icon: '🔌'
        },
        // 13. Drawing Challenge (Converted to Quiz)
        {
            type: 'quiz',
            question: 'Gambar alat yang menghasilkan cahaya! Sebutkan nama alat tersebut.',
            options: [
                { text: 'Lampu, Senter, Lilin', correct: true },
                { text: 'Kipas Angin, Radio, Kincir Angin', correct: false },
                { text: 'Kompor, Panel Surya, Turbin Air', correct: false }
            ],
            icon: '🎨'
        },
        // 14. Final Reward
        {
            type: 'reward',
            content: 'Medali Emas! 🥇 Kamu ahli energi dasar!',
            icon: '🏅'
        },
        // 15. Finish Tile
        {
            type: 'finish',
            content: 'Level 1 Selesai! 🎯 Siap untuk Level 2?',
            icon: '🏆'
        }
    ],
    level2: [
        // 1. Start Tile
        {
            type: 'start',
            content: 'Siap belajar perubahan energi? 🔋→💡',
            icon: '🏁'
        },
        // 2. Basic Transformation
        {
            type: 'info',
            content: 'Energi bisa berubah bentuk! Contoh: Listrik → Cahaya (lampu)',
            icon: '💡',
            example: 'Setrika: Listrik → Panas'
        },
        // 3. Quiz: Light Bulb
        {
            type: 'quiz',
            question: 'Perubahan energi di lampu?',
            options: [
                { text: 'Listrik → Gerak', correct: false },
                { text: 'Listrik → Cahaya', correct: true },
                { text: 'Baterai → Bunyi', correct: false }
            ],
            icon: '⚡'
        },
        // 4. Sound Energy
        {
            type: 'info',
            content: 'Radio: Listrik → Bunyi',
            icon: '🔊',
            example: 'Gitar: Gerak → Bunyi'
        },
        // 5. Transformation Challenge (Converted to Quiz)
        {
            type: 'quiz',
            question: 'Pasangkan alat dengan perubahan energinya:',
            options: [
                { text: 'Kipas Angin: Listrik → Gerak', correct: true },
                { text: 'Kompor Gas: Kimia → Panas', correct: true },
                { text: 'Senter: Kimia → Cahaya', correct: true }
            ],
            icon: '🔌'
        },
        // 6. Reward 1
        {
            type: 'reward',
            content: '+15 Poin! 🌟 Ahli transformasi energi!',
            icon: '🏅'
        },
        // 7. Heat Energy
        {
            type: 'info',
            content: 'Kompor: Energi kimia → Panas',
            icon: '🔥',
            example: 'Mobil: Bensin → Gerak'
        },
        // 8. Quiz: Movement
        {
            type: 'quiz',
            question: 'Energi apa yang menggerakkan mobil?',
            options: [
                { text: 'Listrik', correct: false },
                { text: 'Bensin (Kimia → Gerak)', correct: true },
                { text: 'Angin', correct: false }
            ],
            icon: '🚗'
        },
        // 9. Solar Transformation
        {
            type: 'info',
            content: 'Panel Surya: Cahaya → Listrik',
            icon: '☀️',
            example: 'Kalkulator surya bekerja dengan prinsip ini'
        },
        // 10. Drawing Challenge (Converted to Quiz)
        {
            type: 'quiz',
            question: 'Gambar 1 contoh perubahan energi di rumah! Sebutkan nama alat tersebut.',
            options: [
                { text: 'Setrika, Blender, Lampu', correct: true },
                { text: 'Kipas Angin, Radio, Kincir Angin', correct: false },
                { text: 'Kompor, Panel Surya, Turbin Air', correct: false }
            ],
            icon: '✏️'
        },
        // 11. Reward 2
        {
            type: 'reward',
            content: 'Medali Perak! 🥈 Kamu menguasai transformasi dasar!',
            icon: '🎖️'
        },
        // 12. Complex Transformation
        {
            type: 'info',
            content: 'PLTA: Air → Gerak → Listrik',
            icon: '💧',
            example: 'Turbin air mengubah energi air menjadi listrik'
        },
        // 13. Quiz: Multiple Steps
        {
            type: 'quiz',
            question: 'Apa urutan energi di PLN?',
            options: [
                { text: 'Batu bara → Panas → Listrik', correct: true },
                { text: 'Angin → Listrik → Cahaya', correct: false },
                { text: 'Matahari → Kimia → Gerak', correct: false }
            ],
            icon: '🏭'
        },
        // 14. Final Challenge (Converted to Quiz)
        {
            type: 'quiz',
            question: 'Urutkan transformasi energi di blender:',
            options: [
                { text: 'Listrik → Gerak (motor) → Menghancurkan buah', correct: true },
                { text: 'Gerak → Listrik → Cahaya', correct: false },
                { text: 'Panas → Kimia → Listrik', correct: false }
            ],
            icon: '料理'
        },
        // 15. Finish Tile
        {
            type: 'finish',
            content: 'Level 2 Tuntas! 🚀 Menuju Energi Alternatif!',
            icon: '🏆'
        }
    ],
    level3: [
        // 1. Start Tile
        {
            type: 'start',
            content: 'Selamat datang di era energi hijau! 🌱⚡',
            icon: '🏁'
        },
        // 2. Renewable Energy Basics
        {
            type: 'info',
            content: 'Energi alternatif berasal dari sumber yang tidak akan habis.',
            icon: '🔋',
            example: 'Contoh: Matahari, angin, air'
        },
        // 3. Quiz: Renewable vs Non-renewable
        {
            type: 'quiz',
            question: 'Mana yang termasuk energi alternatif?',
            options: [
                { text: 'Batubara', correct: false },
                { text: 'Panel Surya', correct: true },
                { text: 'Minyak Bumi', correct: false }
            ],
            icon: '☀️'
        },
        // 4. Solar Energy Application
        {
            type: 'info',
            content: 'Panel surya mengubah cahaya matahari menjadi listrik.',
            icon: '💡',
            example: 'Digunakan di rumah, lampu jalan, dan satelit'
        },
        // 5. Wind Energy Challenge (Converted to Quiz)
        {
            type: 'quiz',
            question: 'Jelaskan cara kerja kincir angin!',
            options: [
                { text: 'Angin → Gerak kincir → Listrik', correct: true },
                { text: 'Air → Gerak → Listrik', correct: false },
                { text: 'Panas → Gerak → Listrik', correct: false }
            ],
            icon: '🌬️'
        },
        // 6. Reward 1
        {
            type: 'reward',
            content: '+20 Poin! 🌍 Kamu paham energi angin!',
            icon: '🌍'
        },
        // 7. Hydroelectric Power
        {
            type: 'info',
            content: 'PLTA menggunakan air untuk menghasilkan listrik.',
            icon: '💧',
            example: 'Air terjun → Turbin → Listrik'
        },
        // 8. Quiz: Energy Efficiency
        {
            type: 'quiz',
            question: 'Apa keuntungan energi alternatif?',
            options: [
                { text: 'Ramah lingkungan', correct: true },
                { text: 'Harganya mahal', correct: false },
                { text: 'Cepat habis', correct: false }
            ],
            icon: '🌱'
        },
        // 9. Bioenergy Example
        {
            type: 'info',
            content: 'Biogas dari sampah organik bisa menghasilkan energi.',
            icon: '🗑️',
            example: 'Digunakan untuk memasak dan penerangan'
        },
        // 10. Design Challenge (Converted to Quiz)
        {
            type: 'quiz',
            question: 'Rancang rumah hemat energi dengan 3 sumber alternatif! Sebutkan sumber-sumber tersebut.',
            options: [
                { text: 'Panel surya, kincir angin, biogas', correct: true },
                { text: 'Solar, Wind, Hydro', correct: false },
                { text: 'Coal, Oil, Gasoline', correct: false }
            ],
            icon: '🏠'
        },
        // 11. Reward 2
        {
            type: 'reward',
            content: 'Medali Platinum! 🏅 Ahli energi alternatif!',
            icon: '💎'
        },
        // 12. Geothermal Energy
        {
            type: 'info',
            content: 'Energi panas bumi digunakan untuk listrik dan pemanas.',
            icon: '🌋',
            example: 'PLTP di daerah gunung berapi'
        },
        // 13. Quiz: Problem Solving
        {
            type: 'quiz',
            question: 'Solusi untuk daerah sering mati listrik?',
            options: [
                { text: 'Pasang panel surya', correct: true },
                { text: 'Tambah genset diesel', correct: false },
                { text: 'Gunakan lilin', correct: false }
            ],
            icon: '💡'
        },
        // 14. Final Project (Converted to Quiz)
        {
            type: 'quiz',
            question: 'Buat poster "Tips Hemat Energi di Rumah". Berikut adalah beberapa tips yang dapat kamu gunakan:',
            options: [
                { text: 'Matikan lampu jika tidak dipakai, Gunakan alat berlabel hemat energi, Manfaatkan cahaya matahari siang hari', correct: true },
                { text: 'Gunakan AC sepanjang waktu, Pakai lampu LED, Matikan komputer saat tidur', correct: false },
                { text: 'Gunakan mesin cuci setiap hari, Pakai dispenser air panas, Gunakan lampu neon', correct: false }
            ],
            icon: '✍️'
        },
        // 15. Finish Tile
        {
            type: 'finish',
            content: 'Kamu ahli energi! 🌟 Siap selamatkan bumi!',
            icon: '🌍'
        }
    ]
};
