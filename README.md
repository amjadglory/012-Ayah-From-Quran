 👋 السلام عليكم 

⬇️ English Provided Below ⬇️

حابب أشارك معاكم أول مشروع بسيط عملت عليه بالـ JavaScript، وهو Ayah From Quran 💙

الفكرة ببساطة إن كل مرة بدوس فيها على الزرار، بتظهر آية مختلفة من القرآن الكريم 💙

في المشروع ده بدأت أستخدم شوية حاجات من الأساسيات اللي اتعلمتها في الـ JS زي الـ arrays و الـ loops، ودمجتهم مع حاجة جديدة اتعلمتها وهي إزاي أضيف حدث (event) لما يحصل فعل معين باستخدام addEventListener.

الفكرة كانت إن كل مرة أدوس على الزرار تطلع آية مختلفة، مش نفس الآية تتكرر.
وعشان أنفذ ده، المهندس عمار أشرف (Ammar Ashraf) نصحنا نبحث عن كائن الـ Math ونعرف إيه الـ methods اللي فيه زي random و floor.

من خلالهم قدرت أعمل متغير بيخزن رقم عشوائي، ومتغير تاني بيخزن آخر رقم عشوائي كان طالع قبل كده.

عملت for loop جواها بنولّد رقم عشوائي باستخدام Math.random، وبحوّله لرقم صحيح عن طريق Math.floor.
والـ loop دي كنت خلتها تشتغل طول ما عدد التكرارات أقل من 100 (وده كان خطأ مني حشرحه بعدين ❗).

بعد كده بخزّن الرقم العشوائي في المتغير الخاص بيه، وبعمل شرط if علشان أشوف:
هل الرقم الجديد هو هو آخر رقم كان طالع؟

لو مختلف، بوقف الـ loop عن طريق break.

لو هو نفس الرقم، بخلي الـ loop تشتغل تاني لحد ما الرقم الجديد يكون مختلف عن اللي قبله.

بعدها عملت array of objects، كل object فيه اسم السورة، ورقم الآية، ونص الآية، وترجمتها بالإنجليزي،
وبعرضهم على الصفحة باستخدام template literals و content.innerHTML.

التصميم بتاع الموقع بسيط جدًا وليه طابع ديني مريح وجميل 💙

(شرح الخطأ) ❌:
المهندس عمار أشرف (Ammar Ashraf) قالي إن المفروض أستخدم هنا do-while loop بدل for loop.
لأن فكرة إني أكرر الـ loop 100 مرة عشان أطلع رقم عشوائي ده كتير جدًا، وكمان ممكن في المرة العاشرة يطلع نفس الرقم، وساعتها هيحصل Error.

إنما في do-while loop الفكرة إن الكود هيعمل (do) عملية توليد الرقم العشوائي، وطول ما (while) الرقم الجديد طالع زي القديم، يفضل يولّد رقم جديد لحد ما يطلع رقم مختلف.
ومن هنا فهمت إمتى أستخدم for loop و إمتى أستخدم while loop.

وبفضل الله تم تعديل الكود، واتعلمت من الخطأ 💙 

---

## 🇬🇧 English Translation

Hi everyone,

I’d like to share with you my first small project using JavaScript — Ayah From Quran 💙

The idea is simple: every time you click the button, a different verse from the Quran appears 💙

In this project, I started applying some JavaScript basics I learned, like arrays and loops, and combined them with a new concept — how to add an event using addEventListener.

The goal was to make sure each button click shows a different verse, not the same one repeatedly.
To achieve that, Eng. Ammar Ashraf advised us to look into the Math object and explore methods like random and floor.

Using these, I created a variable to store a random number, and another one to keep track of the previous number.

I used a for loop that generates random numbers with Math.random() and converts them to integers using Math.floor().
The loop was set to run while the count was less than 100 (which was a mistake I’ll explain later ❗).

After generating each number, I checked if it matched the previous one using an if condition:

If it was different, I used break to stop the loop.

If it was the same, I let the loop run again until a new number appeared.

Then I created an array of objects, each object containing the surah name, verse number, verse text, and its English translation,
and displayed them using template literals and content.innerHTML.

The design is very simple, with a nice spiritual touch 💙

(Error explanation) ❌:
Eng. Ammar Ashraf told me I should have used a do-while loop instead of a for loop.
Repeating the loop 100 times just to get a new random number is unnecessary — and sometimes the same number can still appear early, causing an error.

In a do-while loop, the code does generate a random number first, and while it matches the previous one, it keeps generating new numbers until it’s different.
That’s how I learned when to use a for loop and when to use a while loop.

Alhamdulillah, I fixed the code and learned from the mistake 💙
