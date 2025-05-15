const levels = {
    level1: [
        // 1. Start
        { type: 'start', content: 'Selamat datang di dunia energi!', icon: '🏁' },
        
        // 2. Info: Definisi Energi
        { 
            type: 'info', 
            content: 'Energi adalah kemampuan untuk melakukan usaha atau aktivitas', 
            example: 'Contoh: Lampu menyala menggunakan energi listrik',
            icon: '⚡'
        },
        
        // 3. Quiz C1: Pengertian Energi
        { 
            type: 'quiz', 
            question: 'Apa pengertian energi?',
            options: [
                { text: 'Kemampuan untuk bergerak', correct: false },
                { text: 'Kemampuan melakukan usaha', correct: true },
                { text: 'Benda yang menghasilkan panas', correct: false }
            ],
            icon: '💡'
        },
        
        // 4. Info: Sumber Energi
        { 
            type: 'info', 
            content: 'Sumber energi terbagi menjadi terbarukan dan tak terbarukan',
            example: 'Matahari termasuk energi terbarukan',
            icon: '☀️'
        },
        
        // 5. Quiz C2: Sumber Energi Tak Terbarukan
        { 
            type: 'quiz', 
            question: 'Manakah sumber energi tak terbarukan?',
            options: [
                { text: 'Matahari', correct: false },
                { text: 'Batu bara', correct: true },
                { text: 'Angin', correct: false }
            ],
            icon: '🔥'
        },
        
        // 6. Reward: +10 Poin
        { 
            type: 'reward', 
            content: '+10 Poin! 🌟 Pahami sumber energi dengan baik!',
            icon: '⭐'
        },
        
        // 7. Info: Fotosintesis
        { 
            type: 'info', 
            content: 'Tumbuhan memanfaatkan energi matahari untuk fotosintesis',
            example: 'Proses membuat makanan dari cahaya',
            icon: '🌱'
        },
        
        // 8. Quiz C2: Sumber Energi Fotosintesis
        { 
            type: 'quiz', 
            question: 'Sumber energi utama untuk fotosintesis adalah...',
            options: [
                { text: 'Matahari', correct: true },
                { text: 'Listrik', correct: false },
                { text: 'Baterai', correct: false }
            ],
            icon: '🌻'
        },
        
        // 9. Info: Energi Listrik
        { 
            type: 'info', 
            content: 'Listrik adalah energi yang paling sering digunakan di rumah',
            example: 'Contoh: TV, Kulkas, Lampu',
            icon: '🔌'
        },
        
        // 10. Quiz C2: Sumber Energi Rumah
        { 
            type: 'quiz', 
            question: 'Contoh sumber energi di rumah adalah...',
            options: [
                { text: 'Angin', correct: false },
                { text: 'Listrik', correct: true },
                { text: 'Minyak bumi', correct: false }
            ],
            icon: '🏠'
        },
        
        // 11. Info: Benda Bukan Sumber Energi
        { 
            type: 'info', 
            content: 'Benda mati tidak bisa menghasilkan energi sendiri',
            example: 'Contoh: Batu, Kursi, Buku',
            icon: '📚'
        },
        
        // 12. Quiz C2: Bukan Sumber Energi
        { 
            type: 'quiz', 
            question: 'Manakah yang BUKAN sumber energi?',
            options: [
                { text: 'Matahari', correct: false },
                { text: 'Baterai', correct: false },
                { text: 'Batu', correct: true }
            ],
            icon: '❌'
        },
        
        // 13. Info: Bentuk Energi
        { 
            type: 'info', 
            content: 'Energi memiliki berbagai bentuk: cahaya, gerak, panas, bunyi',
            example: 'Lampu menghasilkan energi cahaya',
            icon: '🌈'
        },
        
        // 14. Quiz C2: Bentuk Energi Lampu
        { 
            type: 'quiz', 
            question: 'Bentuk energi yang dihasilkan lampu adalah...',
            options: [
                { text: 'Cahaya', correct: true },
                { text: 'Gerak', correct: false },
                { text: 'Panas', correct: false }
            ],
            icon: '💡'
        },
        
        // 15. Finish Level 1
        { 
            type: 'finish', 
            content: 'Level 1 Selesai! Lanjut ke transformasi energi!',
            icon: '🏆'
        }
    ],
    
    level2: [
        // 1. Start Level 2
        { type: 'start', content: 'Siap belajar perubahan energi?', icon: '🏁' },
        
        // 2. Info: Transformasi Dasar
        { 
            type: 'info', 
            content: 'Energi bisa berubah bentuk melalui alat tertentu',
            example: 'Setrika: Listrik → Panas',
            icon: '🔄'
        },
        
        // 3. Quiz C3: Perubahan Energi Lampu
        { 
            type: 'quiz', 
            question: 'Perubahan energi di lampu?',
            options: [
                { text: 'Listrik → Gerak', correct: false },
                { text: 'Listrik → Cahaya', correct: true },
                { text: 'Baterai → Bunyi', correct: false }
            ],
            icon: '💡'
        },
        
        // 4. Info: Energi Bunyi
        { 
            type: 'info', 
            content: 'Alat musik mengubah energi gerak menjadi bunyi',
            example: 'Gitar: Gerakan tangan → Bunyi',
            icon: '🔊'
        },
        
        // 5. Quiz C3: Transformasi Kipas Angin
        { 
            type: 'quiz', 
            question: 'Perubahan energi di kipas angin?',
            options: [
                { text: 'Listrik → Gerak', correct: true },
                { text: 'Kimia → Panas', correct: false },
                { text: 'Cahaya → Bunyi', correct: false }
            ],
            icon: '🌀'
        },
        
        // 6. Reward: +15 Poin
        { 
            type: 'reward', 
            content: '+15 Poin! 🌟 Kuasai transformasi energi!',
            icon: '⭐'
        },
        
        // 7. Info: Energi Kimia
        { 
            type: 'info', 
            content: 'Bensin menyimpan energi kimia',
            example: 'Mobil: Bensin → Gerak',
            icon: '🚗'
        },
        
        // 8. Quiz C3: Energi Mobil
        { 
            type: 'quiz', 
            question: 'Energi apa yang menggerakkan mobil?',
            options: [
                { text: 'Listrik', correct: false },
                { text: 'Bensin (Kimia → Gerak)', correct: true },
                { text: 'Angin', correct: false }
            ],
            icon: '⛽'
        },
        
        // 9. Info: Panel Surya
        { 
            type: 'info', 
            content: 'Panel surya mengubah cahaya → listrik',
            example: 'Digunakan di kalkulator surya',
            icon: '☀️'
        },
        
        // 10. Quiz C4: Transformasi Kompor Gas
        { 
            type: 'quiz', 
            question: 'Perubahan energi di kompor gas?',
            options: [
                { text: 'Kimia → Panas', correct: true },
                { text: 'Listrik → Gerak', correct: false },
                { text: 'Panas → Cahaya', correct: false }
            ],
            icon: '🔥'
        },
        
        // 11. Info: PLTA
        { 
            type: 'info', 
            content: 'PLTA menggunakan air untuk menghasilkan listrik',
            example: 'Air → Gerak turbin → Listrik',
            icon: '🌊'
        },
        
        // 12. Quiz C4: Urutan PLN
        { 
            type: 'quiz', 
            question: 'Urutan energi di PLN?',
            options: [
                { text: 'Batu bara → Panas → Listrik', correct: true },
                { text: 'Angin → Listrik → Cahaya', correct: false },
                { text: 'Matahari → Kimia → Gerak', correct: false }
            ],
            icon: '🏭'
        },
        
        // 13. Info: Blender
        { 
            type: 'info', 
            content: 'Blender mengubah listrik → gerak → menghancurkan buah',
            example: 'Contoh transformasi energi bertahap',
            icon: '料理'
        },
        
        // 14. Quiz C4: Transformasi Blender
        { 
            type: 'quiz', 
            question: 'Urutan transformasi energi di blender?',
            options: [
                { text: 'Listrik → Gerak (motor) → Menghancurkan buah', correct: true },
                { text: 'Gerak → Listrik → Cahaya', correct: false },
                { text: 'Panas → Kimia → Listrik', correct: false }
            ],
            icon: '⚡'
        },
        
        // 15. Finish Level 2
        { 
            type: 'finish', 
            content: 'Level 2 Tuntas! Menuju energi alternatif!',
            icon: '🏆'
        }
    ],
    
    level3: [
        // 1. Start Level 3
        { type: 'start', content: 'Selamat datang di era energi hijau!', icon: '🏁' },
        
        // 2. Info: Energi Alternatif
        { 
            type: 'info', 
            content: 'Energi alternatif ramah lingkungan',
            example: 'Contoh: Panel surya, kincir angin, biogas',
            icon: '🌍'
        },
        
        // 3. Quiz C5: Energi Alternatif
        { 
            type: 'quiz', 
            question: 'Manakah energi alternatif?',
            options: [
                { text: 'Batubara', correct: false },
                { text: 'Panel surya', correct: true },
                { text: 'Minyak bumi', correct: false }
            ],
            icon: '☀️'
        },
        
        // 4. Info: PLTS
        { 
            type: 'info', 
            content: 'PLTS menggunakan panel surya untuk listrik',
            example: 'Digunakan di daerah terpencil',
            icon: '🔋'
        },
        
        // 5. Quiz C5: Solusi Mati Listrik
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
        
        // 6. Reward: +20 Poin
        { 
            type: 'reward', 
            content: '+20 Poin! 🌟 Kamu paham energi alternatif!',
            icon: '💎'
        },
        
        // 7. Info: Biogas
        { 
            type: 'info', 
            content: 'Biogas berasal dari sampah organik',
            example: 'Digunakan untuk memasak dan penerangan',
            icon: '沼气'
        },
        
        // 8. Quiz C6: PLTA
        { 
            type: 'quiz', 
            question: 'Urutan energi di PLTA?',
            options: [
                { text: 'Air → Gerak → Listrik', correct: true },
                { text: 'Batu bara → Panas → Listrik', correct: false },
                { text: 'Angin → Gerak → Cahaya', correct: false }
            ],
            icon: '💧'
        },
        
        // 9. Info: Geothermal
        { 
            type: 'info', 
            content: 'Energi panas bumi untuk listrik',
            example: 'Digunakan di daerah gunung berapi',
            icon: '🌋'
        },
        
        // 10. Quiz C6: Energi Panas Bumi
        { 
            type: 'quiz', 
            question: 'Manfaat utama energi panas bumi?',
            options: [
                { text: 'Menghasilkan listrik', correct: true },
                { text: 'Menggerakkan mobil', correct: false },
                { text: 'Menyalakan lampu senter', correct: false }
            ],
            icon: '⚡'
        },
        
        // 11. Info: Tips Hemat Energi
        { 
            type: 'info', 
            content: 'Tips hemat energi: Matikan alat elektronik tidak dipakai',
            example: 'Gunakan lampu LED untuk efisiensi',
            icon: '💡'
        },
        
        // 12. Quiz C6: Tips Hemat Energi
        { 
            type: 'quiz', 
            question: 'Contoh perilaku hemat energi?',
            options: [
                { text: 'Nyalakan AC 24 jam', correct: false },
                { text: 'Gunakan lampu LED', correct: true },
                { text: 'Pakai mesin cuci setiap hari', correct: false }
            ],
            icon: '♻️'
        },
        
        // 13. Info: Energi Masa Depan
        { 
            type: 'info', 
            content: 'Indonesia sedang mengembangkan EBT',
            example: 'Target 23% energi terbarukan di 2025',
            icon: '🚀'
        },
        
        // 14. Quiz C6: Penerapan EBT
        { 
            type: 'quiz', 
            question: 'Penerapan EBT di Indonesia?',
            options: [
                { text: 'Panel surya di Pulau terpencil', correct: true },
                { text: 'PLTU batubara di perkotaan', correct: false },
                { text: 'Pembangkit diesel di desa', correct: false }
            ],
            icon: '🇮🇩'
        },
        
        // 15. Finish Level 3
        { 
            type: 'finish', 
            content: 'Kamu ahli energi! Selamatkan bumi!',
            icon: '🌍'
        }
    ]
};
