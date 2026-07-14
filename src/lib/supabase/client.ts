import { createClient } from "@supabase/supabase-js";

// Bu dosya, Supabase'e bağlanmak için TEK ve MERKEZİ bir istemci (client)
// oluşturuyor. Projenin başka hiçbir yerinde createClient() tekrar
// çağrılmayacak - her yerde bu dosyadan import edilen "supabase" nesnesi kullanılacak.

// Ortam değişkenlerini oku. Bunlar .env.local dosyasından geliyor ve
// GitHub'a hiç gönderilmiyor (bkz. .gitignore).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Güvenlik/hata önleme: eğer bu değişkenler bir şekilde tanımlanmamışsa
// (örneğin .env.local dosyası eksikse), uygulamanın anlamsız bir hatayla
// çökmesi yerine, net bir uyarı mesajıyla erken durmasını sağlıyoruz.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase ortam değişkenleri eksik. .env.local dosyasında NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_ANON_KEY tanımlı olduğundan emin olun."
  );
}

// Supabase istemcisini oluşturup dışa aktarıyoruz. Bu nesne, ileride
// veritabanı sorguları (select, insert, update) yapmak için kullanılacak.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);