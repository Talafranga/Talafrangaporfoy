export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  coverImage: string;
  localizations?: {
    [locale: string]: {
      title: string;
      excerpt: string;
      content: string;
      date: string;
      category: string;
    }
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: 'good-developer',
    title: "A Good Developer Doesn't Need to Know Dozens of Programming Languages!",
    excerpt: "Many people believe that to be a successful developer, you need to master countless programming languages. That's a common misconception. Software development is not just about syntax.",
    content: `## Introduction
Many people believe that to be a successful developer, you need to master countless programming languages. That's a common misconception. Software development is not just about syntax.

## What Really Matters: Algorithms and Paradigms
* Understanding algorithms

* Abstracting and solving problems

* Mastering software development paradigms (OOP, FP, etc.)

These are the core skills that make a strong developer. Programming languages are simply tools to express these skills.

## Languages Are Not Meant to Be Memorized
No developer writes complex software entirely from memory without referring to documentation. The tech world evolves daily. New libraries, syntax changes, and fresh paradigms appear all the time.

* Let's say you memorized a language.
* A month later, you might forget it.
* Even worse, updates could make the language very different from what you learned.

## Advantage: Understand the Logic, Not Just the Language
> "At the heart of software is algorithmic thinking."

Knowing a language helps in the short term, but understanding algorithms and core logic makes you adaptable and future-proof. It's not the syntax that matters—it's how you think.

## Example: Simple Problem Solving
\`\`\`python
# A simple function that sums two numbers
def sum_two_numbers(a, b):
    return a + b
\`\`\`

This function's logic is universal. You can implement it in C++, JavaScript, Go, or any language. The syntax changes, but the thought process remains the same.

## Conclusion
Don't waste your energy memorizing dozens of languages. Instead, focus on algorithms, paradigms, and problem-solving. Real developers learn not just the language, but the logic behind the systems.`,
    date: "April 2, 2025",
    readTime: "5",
    category: "Development",
    image: "/blog1.png",
    coverImage: "/blog1.png",
    localizations: {
      tr: {
        title: "İyi Bir Yazılımcının Çok Sayıda Programlama Dili Bilmesine Gerek Yok!",
        excerpt: "Birçok kişi, başarılı bir yazılımcı olmanın onlarca programlama diline hâkim olmakla mümkün olduğunu düşünür. Bu aslında büyük bir yanılgıdır. Çünkü yazılım, sadece sözdizimi bilmekten ibaret değildir.",
        content: `## Giriş
Birçok kişi, başarılı bir yazılımcı olmanın onlarca programlama diline hâkim olmakla mümkün olduğunu düşünür. Bu aslında büyük bir yanılgıdır. Çünkü yazılım, sadece sözdizimi bilmekten ibaret değildir.

## Asıl Bilmen Gereken: Algoritma ve Paradigmalar
* Algoritmaları kavramak

* Problemleri soyutlayarak çözüm üretmek

* Yazılım geliştirme paradigmalarına hâkim olmak (OOP, FP, vs.)

İşte bu üç temel yetenek, seni güçlü bir yazılımcı yapar. Programlama dili, yalnızca bu yeteneklerin bir aracıdır.

## Diller Ezberlenmez, Mantığı Anlaşılır
Hiçbir yazılımcı dökümantasyona bakmadan kompleks bir projeyi ezberden yazamaz. Yazılım dünyası her gün güncellenir. Yeni kütüphaneler, yeni sözdizimleri, yeni yaklaşımlar…

* Diyelim ki bir dili ezberledin.
* Bir ay sonra unutabilirsin.
* Üstelik o dilin yeni sürümü çıktığında bambaşka olabilir.

## Avantaj: Dili Değil, Mantığını Anlayan Kazanır
> "Yazılımın temeli algoritmadır."

Bir dili bilmek kısa vadede işe yarar, ama algoritmalar ve yazılım mantığı sana uzun vadede büyük bir esneklik kazandırır. Bu yüzden dil değil, düşünme biçimi önemlidir.

## Örnek: Basit Bir Problem Çözümü
\`\`\`python
# İki sayının toplamını bulan basit bir fonksiyon
def sum_two_numbers(a, b):
    return a + b
\`\`\`

Bu kodun amacı bellidir: iki sayıyı toplamak. Aynı mantık C++, JavaScript veya Go gibi birçok dilde aynı şekilde uygulanabilir. Değişen sadece sözdizimi, mantık aynı.`,
        date: "2 Nisan, 2025",
        category: "Yazılım Geliştirme"
      }
    }
  }
]; 