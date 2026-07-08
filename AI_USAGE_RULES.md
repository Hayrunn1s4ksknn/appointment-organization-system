# AI Kullanım Kuralları

Bu proje kapsamında yapay zeka araçlarıyla (Claude Code, ChatGPT, Copilot vb.) çalışırken uyulması gereken kurallar:

1. **Kod yazmadan önce mevcut dosya yapısı analiz edilecek.**
   Yeni kod eklemeden önce `src/app`, `components`, `lib`, `types` gibi klasörlerin mevcut durumu incelenecek, projenin konvansiyonlarına uyulacak.

2. **AI'dan gelen kod doğrudan yapıştırılmadan önce hangi dosyaya yazılacağı anlaşılacak.**
   Önerilen kodun hangi dosyaya, hangi konuma ait olduğu netleştirilmeden kopyala-yapıştır yapılmayacak.

3. **Terminalde bilinmeyen komut çalıştırılmadan önce ne yaptığı sorulacak.**
   Anlamı net olmayan bir komut çalıştırılmadan önce ne işe yaradığı öğrenilecek.

4. **`.env.local` ve API key gibi bilgiler asla paylaşılmayacak.**
   Ortam değişkenleri, gizli anahtarlar ve benzeri hassas bilgiler AI araçlarıyla veya başka bir yerle paylaşılmayacak.

5. **Her gün sonunda `git status` ve `git diff` kontrol edilecek.**
   Gün sonunda değişiklikler gözden geçirilecek, beklenmeyen veya istenmeyen değişiklik olup olmadığı doğrulanacak.
