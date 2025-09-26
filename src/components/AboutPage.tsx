// ...existing code...
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Award, Target, Heart, Lightbulb, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AboutPage = React.memo(() => {
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
      title: "Inovasi",
      description: "Kami terus mengeksplorasi teknologi dan strategi baru untuk memberikan solusi mutakhir."
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Semangat",
      description: "Kami passionate membantu bisnis berkembang dan membangun kemitraan jangka panjang."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Integritas",
      description: "Komunikasi transparan dan praktik bisnis yang etis adalah landasan kami."
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "Hasil",
      description: "Kami berkomitmen memberikan hasil terukur yang mendorong pertumbuhan bisnis nyata."
    }
  ];

  const team = [
    {
      name: "RD Moch Reikhan",
      role: "CEO & Pendiri",
      bio: "10+ tahun pengalaman di pemasaran digital dan strategi bisnis untuk UMKM dan perusahaan lokal.",
      image: "https://instagram.fbdo1-3.fna.fbcdn.net/v/t51.2885-19/502525797_18068581624971404_4929214643431659504_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbdo1-3.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QGPK1ObIRPnt5wGRLIPGWlO58LD3DpCTHw18iGauEmqpJJ3L9CyNKGvkk4QO_dOotI&_nc_ohc=WeAOzWXCNYwQ7kNvwGmXs_A&_nc_gid=pqBoX2IZMUHdRdHGJcNHpQ&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_Afb120U__PBDNQn9XbPA_Y0TVQUWbohf-ykxfHo9i5Rdfw&oe=68DC6270&_nc_sid=7d3ac5"
    },
  ];

  const milestones = [
    { year: "2024", title: "Didirikan", description: "Hansco didirikan dengan visi mendukung UMKM dan perusahaan lokal menghadapi era digital." },
    { year: "2025", title: "Klien Pertama", description: "Meraih klien pertama dan membangun portofolio layanan digital lokal." },
    { year: "2025", title: "Pengakuan Lokal", description: "Dikenal sebagai mitra tepercaya untuk solusi pemasaran digital di regional." },
    { year: "2025", title: "Perluasan Layanan", description: "Menambah layanan pengembangan web, branding, dan analitik untuk klien kami." },
    { year: "2025", title: "500+ Proyek", description: "Menargetkan pencapaian ratusan proyek sukses bersama klien." }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Tentang Kami
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Bersama Hansco
                <span className="text-purple-600"> Membangun Bisnis Anda</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hans.co adalah agensi pemasaran digital dan multimedia yang membantu UMKM, instansi, dan perusahaan lokal
                beradaptasi dan berkembang di era digital 4.0 dengan layanan strategis, kreatif, dan berbasis data.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Anggota Tim</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU4ODI1MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Strategi pemasaran digital"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Misi Kami
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Memberdayakan bisnis dari berbagai skala dengan strategi pemasaran inovatif dan solusi digital
            yang terukur untuk mendorong pertumbuhan, membangun hubungan pelanggan yang langgeng, dan menciptakan
            keunggulan kompetitif yang berkelanjutan.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600">
              Prinsip yang menjadi panduan dalam setiap pekerjaan kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tim Kami
            </h2>
            <p className="text-lg text-gray-600">
              Profesional berbakat yang berdedikasi untuk keberhasilan Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-lg text-gray-600">
              Tonggak penting dalam perjalanan pertumbuhan kami
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Siap Bekerja Sama?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Mari diskusikan bagaimana tim kami dapat membantu mentransformasi bisnis Anda dan mencapai tujuan pemasaran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Hubungi Kami
            </button>
            <button className="px-8 py-3 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Lihat Portofolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
});

AboutPage.displayName = 'AboutPage';
// ...existing code...