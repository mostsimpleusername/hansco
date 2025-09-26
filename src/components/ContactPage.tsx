import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export const ContactPage = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "Jakarta",
      address: "Jl. Raya Bogor Km 24 No. 6\nCijantung, Pasar Rebo\nJakarta Timur 13770",
      phone: "+62 21 87798202",
      email: "info@hansco3.com",
      hours: "Senin - Jumat: 08.00 - 17.00 WIB"
    },
    {
      city: "Workshop",
      address: "Jl. Raya Pekapuran No. 5\nSukamaju Baru, Tapos\nDepok 16456",
      phone: "+62 21 87798202",
      email: "support@hansco3.com",
      hours: "Senin - Sabtu: 08.00 - 17.00 WIB"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h2>
            <p className="text-gray-600 mb-6">
              Terima kasih telah menghubungi HansCo3. Kami akan merespons dalam 1x24 jam.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Kirim Pesan Lagi
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hubungi <span className="text-orange-600">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            HansCo3 siap membantu kebutuhan konstruksi, renovasi, maupun interior Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="secondary" className="px-4 py-2">
              Konsultasi Gratis
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Respon Cepat 24 Jam
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Kontak */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Formulir Kontak</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini, tim kami akan segera menghubungi Anda.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nama Lengkap *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Alamat Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Perusahaan
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Nama Perusahaan"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nomor Telepon
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Layanan yang Diminati
                      </label>
                      <Select onValueChange={(value: string) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih layanan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="konstruksi">Konstruksi Gedung</SelectItem>
                          <SelectItem value="renovasi">Renovasi & Perbaikan</SelectItem>
                          <SelectItem value="interior">Desain & Interior</SelectItem>
                          <SelectItem value="mekanikal">Mekanikal & Elektrikal</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Estimasi Anggaran
                      </label>
                      <Select onValueChange={(value: string) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih estimasi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100jt">Di bawah Rp100 Juta</SelectItem>
                          <SelectItem value="100-500jt">Rp100 Juta - Rp500 Juta</SelectItem>
                          <SelectItem value="500jt-1m">Rp500 Juta - Rp1 Miliar</SelectItem>
                          <SelectItem value="1-5m">Rp1 Miliar - Rp5 Miliar</SelectItem>
                          <SelectItem value="over-5m">Lebih dari Rp5 Miliar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Detail Proyek *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Ceritakan detail proyek, kebutuhan, dan tujuan Anda..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Kontak & Kantor */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kontak Cepat</CardTitle>
                <CardDescription>
                  Ingin langsung terhubung dengan kami? Hubungi melalui detail berikut.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">+62 21 87798202</p>
                    <p className="text-sm text-gray-600">Senin - Jumat, 08.00 - 17.00 WIB</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">info@hansco3.com</p>
                    <p className="text-sm text-gray-600">Respon dalam 24 jam</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Jam Operasional</p>
                    <p className="text-sm text-gray-600">Senin - Jumat, 08.00 - 17.00 WIB</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Lokasi Kantor</h3>
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                      {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {office.address}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Telepon:</span> {office.phone}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> {office.email}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Jam:</span> {office.hours}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 py-12 px-8 bg-gray-50 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-600">
              Beberapa informasi umum mengenai layanan HansCo3.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Apakah HansCo3 melayani renovasi rumah?</h4>
              <p className="text-sm text-gray-600">
                Ya, kami melayani renovasi rumah tinggal, kantor, hingga bangunan komersial sesuai kebutuhan Anda.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Apakah tersedia konsultasi gratis?</h4>
              <p className="text-sm text-gray-600">
                Tentu, Anda bisa menghubungi kami untuk mendapatkan konsultasi awal tanpa biaya.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Apakah HansCo3 hanya melayani proyek besar?</h4>
              <p className="text-sm text-gray-600">
                Tidak. Kami melayani berbagai skala proyek, mulai dari rumah pribadi, kantor, hingga proyek besar perusahaan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Berapa lama pengerjaan proyek?</h4>
              <p className="text-sm text-gray-600">
                Waktu pengerjaan tergantung pada skala dan kompleksitas proyek. Estimasi akan kami berikan setelah survey.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

ContactPage.displayName = 'ContactPage';
