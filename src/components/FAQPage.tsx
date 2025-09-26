import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQPage = React.memo(() => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "Layanan apa saja yang ditawarkan Hansco?",
      answer: "Kami menawarkan berbagai layanan pemasaran digital termasuk SEO, pemasaran media sosial, pemasaran konten, pengembangan web, strategi merek, email marketing, iklan berbayar (PPC), analitik & laporan, serta otomatisasi pemasaran.",
      category: "Layanan"
    },
    {
      id: "2",
      question: "Bagaimana cara mengukur keberhasilan kampanye pemasaran?",
      answer: "Kami menggunakan kombinasi KPI seperti ROI, tingkat konversi, pertumbuhan trafik, metrik keterlibatan, generasi prospek, kesadaran merek, dan biaya akuisisi pelanggan. Kami menyediakan laporan bulanan dengan wawasan dan rekomendasi yang dapat ditindaklanjuti.",
      category: "Analitik"
    },
    {
      id: "3",
      question: "Bagaimana struktur harga Anda?",
      answer: "Harga kami disesuaikan dengan kebutuhan spesifik, ruang lingkup proyek, dan tujuan bisnis Anda. Kami menawarkan paket fleksibel mulai dari retainer bulanan untuk layanan berkelanjutan hingga harga berbasis proyek. Hubungi kami untuk penawaran detail.",
      category: "Harga"
    },
    {
      id: "4",
      question: "Berapa lama untuk melihat hasil?",
      answer: "Hasil bervariasi tergantung layanan dan industri Anda. Untuk iklan berbayar, peningkatan trafik bisa langsung terlihat. SEO biasanya menunjukkan hasil signifikan dalam 3–6 bulan. Kampanye kesadaran merek dapat memakan waktu 6–12 bulan. Kami menetapkan ekspektasi realistis saat konsultasi awal.",
      category: "Timeline"
    },
    {
      id: "5",
      question: "Apakah Anda bekerja dengan bisnis di industri tertentu?",
      answer: "Kami bekerja dengan berbagai industri termasuk e-commerce, SaaS, kesehatan, layanan profesional, manufaktur, dan ritel. Tim kami menyesuaikan strategi dengan tantangan dan peluang unik industri Anda.",
      category: "Layanan"
    },
    {
      id: "6",
      question: "Apakah Anda bisa membantu pengembangan website?",
      answer: "Ya, kami menyediakan layanan pengembangan web lengkap termasuk desain responsif, solusi e-commerce, sistem manajemen konten, optimisasi performa, dan pemeliharaan berkelanjutan. Desain kami dibuat dengan fokus SEO dan konversi.",
      category: "Layanan"
    },
    {
      id: "7",
      question: "Bagaimana cara Anda berkomunikasi dengan klien?",
      answer: "Kami menunjuk seorang manajer akun khusus untuk setiap klien dan menjaga komunikasi rutin melalui pertemuan mingguan, tinjauan strategi bulanan, dan tinjauan bisnis triwulanan. Anda memiliki akses langsung ke tim melalui email, telepon, dan portal klien.",
      category: "Proses"
    },
    {
      id: "8",
      question: "Apa yang membuat Hansco berbeda dari agensi lain?",
      answer: "Pendekatan berbasis data, laporan transparan, manajemen akun khusus, dan fokus pada kemitraan jangka panjang membuat kami berbeda. Kami menggabungkan strategi kreatif dengan keahlian teknis dan memiliki tingkat retensi klien 98%.",
      category: "Perusahaan"
    }
  ];

  const categories = ['Semua', 'Layanan', 'Analitik', 'Harga', 'Timeline', 'Proses', 'Perusahaan'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pertanyaan <span className="text-green-600">Umum</span>
          </h1>
          <p className="text-xl text-gray-600">
            Temukan jawaban atas pertanyaan umum tentang layanan, proses, dan bagaimana kami dapat membantu bisnis Anda berkembang.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Content */}
          <div className="lg:col-span-2">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Tidak ada FAQ yang cocok dengan pencarian Anda.</p>
              </div>
            ) : (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-start space-x-3">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{faq.question}</h3>
                          <span className="text-sm text-gray-500 mt-1">{faq.category}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fakta Singkat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Waktu Respon</span>
                  <span className="font-medium">&lt; 24 jam</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kepuasan Klien</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Proyek Selesai</span>
                  <span className="font-medium">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pengalaman</span>
                  <span className="font-medium">6+ tahun</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Masih Ada Pertanyaan?</CardTitle>
                <CardDescription>
                  Tim kami siap membantu Anda dengan pertanyaan atau kebutuhan tambahan.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Mulai Live Chat
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Jadwalkan Panggilan
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Kirim Email
                </Button>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kategori Populer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.slice(1).map((category) => {
                    const count = faqs.filter(faq => faq.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="flex justify-between items-center w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-700">{category}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 py-12 px-8 bg-gray-50 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Siap untuk Memulai?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Jika Anda tidak menemukan jawaban yang dicari, tim kami siap membantu. 
            Jadwalkan konsultasi gratis untuk membahas kebutuhan pemasaran Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Jadwalkan Konsultasi Gratis
            </Button>
            <Button size="lg" variant="outline">
              Hubungi Dukungan
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
});

FAQPage.displayName = 'FAQPage';
