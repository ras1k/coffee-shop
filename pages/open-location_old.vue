<script setup>
import coffee1 from "@/assets/img/home/hero/coffee1.jpg";
import coffee2 from "@/assets/img/home/hero/coffee2.jpg";
import coffee6 from "@/assets/img/home/hero/coffee6.jpg";
import coffee7 from "@/assets/img/home/hero/coffee7.jpg";

import arabica from "/assets/img/location/arabica.jpg";
import america from "/assets/img/location/america.jpg";
import africa from "/assets/img/location/africa.jpg";
import asia from "/assets/img/location/asia.jpg";
import europa from "/assets/img/location/europa.jpg";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Autoplay];

const coffeeData = ref([
  {
    id: 1,
    name: "Coffee Exploration LLC",
    imageUrl: arabica,
    subTitle: "Your Gateway to Unique Coffee Experiences",
    description: [
      {
        title: "Coffee Arabica Beans",
        desc1:
          "Coffee Arabica originated in Ethiopia, in the Kaffa region, where it was discovered growing wild in about the 15th century. From there, it spread to the rest of the Arab world via Yemen.",
        desc2:
          "It was not until the second half of the 17th century, when the desire to drink coffee had also taken hold of Western Europe, that the coffee plant began to migrate, ending Arabia's monopoly in the cultivation of the coffee tree.",
        desc3:
          "Thus, the cultivation of the coffee plant spread to India (Malabar), Java and even to the American continent. To this day, Coffee Arabica or simply Arabica is the most widespread variety, accounting for 60-70% of world production.",
      },
    ],
    details: [
      {
        title: "Arabica Beans Properties/ Details",
        desc1:
          "High quality Arabica coffee has a slightly sweet taste with floral notes and fruity, berry aromas. Depending on personal taste, the fruity acidity and absence of bitterness may be perceived as pleasant. The intensity of these taste and aroma characteristics is largely determined by the degree of roasting. The lighter the roast, the stronger the emphasis on the fruity characteristics. The origin of the beans also determines the aroma. Depending on the region, the beans have different flavor profiles. Compared to Robusta beans, Arabica beans have lower acidity and bitterness, resulting in a more pleasant and well-balanced cup of coffee.",
        desc2:
          "Coffee Arabica is cultivated at a Higher altitudes (1000-2000m), it is a Delicate plant, high demands on soil and climate. They usually mature fast within about (9 months) of plantations. Which means that the period for pruning and fertilizing is longer. The largest producers are (sorted in left to right order of cultivation volume): Brazil, Colombia, Ethiopia, Honduras / Peru, Guatemala, Mexico, Nicaragua, El Salvador, Costa Rica. The species of beans of Coffea Arabica available from each countries are,",
        desc3:
          "Ethiopian Yirgacheffe: Renowned for its floral aroma, bright acidity, and fruity notes, Ethiopian Yirgacheffe is one of the most sought-after Arabica coffee beans in the world.",
        desc4:
          "Colombian Supremo: Grown in the high-altitude regions of Colombia, Colombian Supremo beans are known for their well-balanced flavor, medium body, and mild acidity.",
        desc5:
          "Guatemalan Antigua: Hailing from the Antigua region of Guatemala, these beans are prized for their complex flavor profile, featuring notes of chocolate, spice, and fruit.",
        desc6:
          "Kenyan AA: Kenyan AA beans are esteemed for their bold and bright flavor profile, characterized by wine-like acidity, fruity sweetness, and floral aromas.",
      },
    ],
  },
  {
    id: 2,
    name: "CoffeeX Arabica",
    imageUrl: coffee1,
    subTitle: "Embrace the Richness of Arabica",
    description: `Enjoy the full-bodied flavors of Arabica coffee with our Coffee x Arabica model. Made with beans harvested in the best mountain regions of the world, the Coffee x Arabica model is sophisticated yet delicate, from the misty mountains of Ethiopia to the lush plantations of Colombia, we select single-origin Arabica beans for you to experience through every cup the richness and perfume of the world’s best coffee.`,
  },
  {
    id: 3,
    name: "CoffeeX America",
    imageUrl: coffee2,
    subTitle: "Experience the Diversity of the Americas",
    description: `Explore the dynamic coffee landscapes of the Americas with 100 percent specialty, traceable coffee from various regions across North and South America. Americano? Yes! Blonde, Medium or Dark Roast? Check! Our model showcases coffee cultivated and harvested in the Americas – from rich bodied Coffee from Brazil, Brazilian Santos which has a classic aroma, medium body and smooth finish, to the smooth cup of Coffee from Central America, Costa Rican Tarrazu. Sourcing responsibly and actively engaging in community development, the Coffee x America model not only delivers exceptional coffee but commitments to environmental stewardship and social responsibility as well.`,
  },
  {
    id: 4,
    name: "CoffeeX Europa",
    imageUrl: coffee6,
    subTitle: "Discover European Elegance in Every Cup",
    description: `Feel like you’re in the cafes of Europe, with our new Coffee x Europa model. Taking a cue from their historical penchant for coffee-drinking, this model preserves long-standing Estonian tradition and innovation. If your tastes lean more towards an ardent Italian espresso, or something altogether more civilized, such as French café au lait, don’t fret, Coffee x Europa has you covered. Indulge in an entirely European experience, treating that which we value most with respect in the name of our common humanity.`,
  },
  {
    id: 5,
    name: "CoffeeX Asia",
    imageUrl: coffee7,
    subTitle: "Unveil the Exotic Flavors of Asia",
    description: `Uncover the exotic flavors of Asia with our Coffee x Asia model. From the boldness of Vietnamese Robusta to the floral notes of Ethiopian Harrar, this model celebrates the unique characteristics of coffee grown in the diverse landscapes of Asia. With a fusion of traditional brewing techniques and modern craftsmanship, Coffee x Asia offers a sensory journey that highlights the unparalleled diversity and complexity of Asian coffee.`,
  },
  {
    id: 6,
    name: "CoffeeX Africa",
    imageUrl: coffee2,
    subTitle: "Experience the Essence of African Coffee",
    description: `Immerse yourself in the vibrant flavors of Africa with our Coffee x Africa model. Renowned for its fruity acidity and floral aromas, African coffee is a true reflection of the continent's rich cultural heritage. With origins ranging from the Ethiopian highlands to the slopes of Mount Kilimanjaro, Coffee x Africa showcases the distinctive profiles of African coffee beans, inviting you to savor the essence of this extraordinary continent in every sip.`,
  },
]);
</script>
<template>
  <div class="">
    <swiper
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      @slideChange="onSlideChange"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
      :modules="modules"
      class=""
    >
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="arabica" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Arabica</h1>
            <h2 class="text-3xl text-white font-bold text-center">
              Indulge in the rich aroma and smooth taste of Arabica Coffee, <br> where every sip is an experience of pure elegance.
            </h2>
          </div>
        </div>

        <div class="container py-6 text-lg">
          <p class="text-3xl font-semibold py-3">CoffeeX Arabica Beans</p>
          <p>
            Coffee Arabica originated in Ethiopia, in the Kaffa region, where it
            was discovered growing wild in about the 15th century. From there,
            it spread to the rest of the Arab world via Yemen. It was not until
            the second half of the 17th century, when the desire to drink coffee
            had also taken hold of Western Europe, that the coffee plant began
            to migrate, ending Arabia's monopoly in the cultivation of the
            coffee tree. Thus, the cultivation of the coffee plant spread to
            India (Malabar), Java and even to the American continent. To this
            day, Coffee Arabica or simply "Arabica" is the most widespread
            variety, accounting for 60-70% of world production.
          </p>
          <p class="pt-4">
            <span class="pb-2 italic font-semibold">Arabica Beans Properties/ Details</span> <br>
            High quality Arabica coffee has a slightly sweet taste with floral
            notes and fruity, berry aromas. Depending on personal taste, the
            fruity acidity and absence of bitterness may be perceived as
            pleasant. The intensity of these taste and aroma characteristics is
            largely determined by the degree of roasting. The lighter the roast,
            the stronger the emphasis on the fruity characteristics. The origin
            of the beans also determines the aroma. Depending on the region, the
            beans have different flavor profiles. Compared to Robusta beans,
            Arabica beans have lower acidity and bitterness, resulting in a more
            pleasant and well-balanced cup of coffee.<br />
            <br />
            Coffee Arabica is cultivated at a Higher altitudes (1000-2000m), it
            is a Delicate plant, high demands on soil and climate. They usually
            mature fast within about (9 months) of plantations. Which means that
            the period for pruning and fertilizing is longer. The largest
            producers are (sorted in left to right order of cultivation volume)
            <br />
            <br />
            Brazil, Colombia, Ethiopia, Honduras / Peru, Guatemala, Mexico,
            Nicaragua, El Salvador, Costa Rica.
            <br />
            <br />
          </p>
          <p class="py-4">
            <span class="pb-2">The species of beans of Coffea Arabica available from each countries are, </span> <br> <br>
            
            <span class="font-semibold" >•	Ethiopian Yirgacheffe:</span> Renowned for its floral aroma, bright acidity, and fruity notes, Ethiopian Yirgacheffe is one of the most sought-after Arabica coffee beans in the world. <br>
            
            <span class="font-semibold">•	Colombian Supremo:</span> Grown in the high-altitude regions of Colombia, Colombian Supremo beans are known for their well-balanced flavor, medium body, and mild acidity. <br>
            <span class="font-semibold">•	Guatemalan Antigua:</span> Hailing from the Antigua region of Guatemala, these beans are prized for their complex flavor profile, featuring notes of chocolate, spice, and fruit. <br>
            <span class="font-semibold">•	Kenyan AA:</span> Kenyan AA beans are esteemed for their bold and bright flavor profile, characterized by wine-like acidity, fruity sweetness, and floral aromas. <br>
            The Climate for the beans are 15-25°C / CoffeeX Arabica needs moderate climate. <br> <br>
            The Caffeine percentage is low with 0.8% to 1.5% <br> <br>
            The Beans contain a good oil percentage 15-17% / higher percentage leads to a smoother texture. <br> <br>
            The sugar percentage is about 6% to 9% / Arabica is the "sweeter" coffee bean. <br> <br>
            
            <p class="text-xl italic font- py-2">Brands of CoffeeX Arabica Beans.</p>
            The best brands of CoffeeX Arabica out of many are:
            <ul class="font-semibold">
              <li>1. Caffe Diemme - Oro</li>
              <li>2. Caffè New York </li>
              <li>3. Goldschmidt - San Cristoba</li>
              <li>4. Wild Coffee from Ethiopia</li>
              <li>5. Caffè Altamura Gold</li>
              <li>6. Castorino – Biologica</li>
            </ul>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="america" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX America</h1>
            <h2 class="text-3xl text-white font-bold">
              America's Finest Beans: From the Heart of the Americas to Your Cup!
            </h2>
          </div>
        </div>

        <div class="container py-6 text-lg">
          <p class="text-3xl font-semibold py-3">CoffeeX America</p>
          <p>
            Coffee beans from the Americas are prized for their diverse flavor profiles and high quality, making them popular choices among coffee enthusiasts worldwide. Originating from countries such as Brazil, Colombia, Guatemala, Mexico, and Honduras, these beans thrive in the region's moderate to high-altitude climates and rich soil conditions. Brazilian Santos beans are celebrated for their smooth and mild flavor, while Colombian Excelso beans are known for their well-balanced profile. Guatemalan Huehuetenango beans offer fruity sweetness and complexity, while Mexican Chiapas beans provide a smooth and mellow drinking experience. Additionally, Honduran Marcala beans boast bold flavors with hints of dark chocolate and nuts. These American coffee beans are widely enjoyed in a variety of brewing methods, from drip coffee to espresso, and are cherished for their versatility and exceptional taste.
          </p>
          <p class="pt-4">
            <span class="pb-2 italic font-semibold">America Beans Properties/ Details</span> <br>
            Coffee America: <br>
            High-quality Arabica coffee from the Americas offers a delightful combination of slightly sweet taste, floral notes, and fruity aromas. The fruity acidity and absence of bitterness are often perceived as pleasant by coffee enthusiasts, with the intensity of these characteristics influenced by the degree of roasting. Lighter roasts emphasize the fruity characteristics, while darker roasts offer a richer flavor profile with caramelized sweetness. <br> <br>
            Origin and Cultivation: <br>
            Coffee beans from the Americas are typically cultivated at moderate to high altitudes, ranging from 900-1,200 meters above sea level. The plants thrive in the region's delicate climate, which provides the ideal conditions for slow maturation and optimal flavor development. The cultivation process demands careful attention, with longer periods for pruning and fertilizing to ensure optimal growth and development. The largest producers of Arabica coffee in the Americas include Brazil, Colombia, Guatemala, Mexico, Nicaragua, El Salvador, Costa Rica, and Honduras

            <br />
            <br />
          </p>
          <p class="py-4">
            <span class="pb-2">Varieties of Beans: </span> <br> <br>
            
            <span class="font-semibold" >1.	Brazilian Bourbon: </span> Renowned for its smooth and creamy texture, Brazilian Bourbon beans offer nutty and chocolatey undertones, with a medium body and mild acidity. <br>
            
            <span class="font-semibold">2.	Colombian Excelso</span> Grown in high-altitude regions, Colombian Excelso beans feature a well-balanced flavor profile with medium body, bright acidity, and versatile flavor notes, making them ideal for various brewing methods. <br>
            <span class="font-semibold">3.	Costa Rican Tarrazu</span> Tarrazu beans from Costa Rica are celebrated for their bright acidity, full body, and complex flavor profile, with notes of citrus, honey, and caramel. <br>
            <span class="font-semibold">4.	Guatemalan Huehuetenango:</span> Hailing from the Huehuetenango region, Guatemalan beans offer a complex flavor profile with notes of chocolate, spice, and fruit, making them highly sought after by coffee aficionados. <br>
            <span class="font-semibold">5.	Mexican Chiapas:</span> Chiapas beans from Mexico are known for their smooth and mellow flavor profile, with medium acidity, chocolatey sweetness, and hints of nuttiness, making them perfect for espresso and French press brewing. <br> <br>
            The low acidity of Brazilian Bourbon Santos derives from the region's lower growing elevations. This is low relative to areas such as Central America where higher elevation plantations (e.g., 1,200 meters above sea level) produce premium gourmet coffees that are brighter (higher acidity).
            
            <p class="text-xl italic font- py-2">Brands of CoffeeX America Beans.</p>
            The best brands of CoffeeX America out of many are:
            <ul class="font-semibold">
              <li>1.	Coffee Masters - Brazil Yellow Bourbon</li>
              <li>2.	Coffee Bros’ - Las Margaritas</li>
              <li>3.	JBC Coffee Roasters - Decaf Colombia</li>
            </ul>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="africa" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Africa</h1>
            <h2 class="text-3xl text-white font-bold">
              Experience the untamed flavors of Africa in every sip of our coffee beans.
            </h2>
          </div>
        </div>

        <div class="container py-6 text-lg">
          <p class="text-3xl font-semibold py-3">CoffeeX Africa</p>
          <p>
            In Africa, coffee has a rich history that dates back centuries. The coffee plant is believed to have originated in Ethiopia, where legend has it that a goat herder named Kaldi discovered the stimulating effects of coffee after noticing his goats became energized upon consuming coffee cherries. From Ethiopia, coffee cultivation spread to other regions of Africa, including Kenya, Tanzania, Rwanda, Uganda, and Burundi. <br>
          Coffee production in Africa has played a significant role in the economies of many countries, providing livelihoods for millions of people. African coffee is known for its diverse flavor profiles, ranging from the bright acidity of Ethiopian Yirgacheffe to the bold and earthy notes of Ugandan Bugisu. Today, Africa is one of the world's leading coffee-producing regions, with countries like Ethiopia, Uganda, and Kenya being major exporters of high-quality Arabica coffee beans. <br>
          In addition to its economic importance, coffee holds cultural significance in many African societies, often being used in traditional ceremonies and rituals. Overall, coffee has deep roots in African history and continues to be a vital part of the continent's cultural heritage and economic development.

          </p>
          <p class="pt-4">
            <span class="pb-2 italic font-semibold">CoffeeX Africa Beans Properties/ Details</span> <br>
            Coffee Africa: <br>
            Coffee beans from Africa exhibit a variety of properties that contribute to their unique flavor profiles and characteristics.   <br> 

            1.	Altitude of Cultivation: African coffee beans are typically cultivated at high altitudes, ranging from 1000 to 2000 meters above sea level. This altitude provides the ideal conditions for slow maturation and optimal flavor development, resulting in beans with complex and nuanced flavors. <br>
            2.	Caffeine Percentage: African coffee beans generally have a moderate caffeine content, typically ranging from 1.2% to 1.5%. This moderate caffeine level contributes to the stimulating effects of African coffee while still allowing for a smooth and enjoyable drinking experience. <br>
            4.	Flavor Profiles: African coffee beans are prized for their diverse flavor profiles, which can include floral aromas, bright acidity, fruity notes, and hints of chocolate and spice. Ethiopian Yirgacheffe beans, for example, are known for their floral aroma and fruity acidity, while Kenyan AA beans exhibit wine-like acidity and fruity sweetness. <br>
            3.	Sugar Content: The sugar content in African coffee beans varies depending on factors such as growing conditions and processing methods. On average, African coffee beans have a sugar content ranging from 6% to 9%, contributing to their natural sweetness and complexity of flavor. <br>
            6.	Environmental Factors: African coffee beans are cultivated in a variety of environmental conditions, ranging from the highlands of Ethiopia to the mountainous regions of Kenya and Tanzania. These diverse growing conditions contribute to the unique terroir of African coffee, influencing factors such as acidity, body, and flavor complexity. <br>
            5.	Processing Methods: African coffee beans are often processed using traditional methods such as washed, natural, or honey processing, which can influence their flavor and aroma. Washed processing tends to result in cleaner and brighter flavors, while natural processing can produce more intense and fruit-forward profiles. <br>

            
            Overall, African coffee beans are prized for their exceptional quality and diverse flavor profiles, making them a favorite among coffee enthusiasts worldwide. From the floral and fruity notes of Ethiopian beans to the bold and complex flavors of Kenyan coffee, African coffee beans offer a rich and satisfying drinking experience that reflects the continent's rich coffee heritage.

            <br />
            <br />
          </p>
          <ul class="py-4">
            <span class="pb-2 italic text-lg font-semibold">	Brands of Africa Coffee Beans: </span> <br> <br>
            
            <li><span class="font-semibold" >1.	Kicking Horse Coffee: </span> Known for their commitment to organic and fair trade practices, Kicking Horse Coffee offers a variety of single-origin African coffees, including beans from Ethiopia, Kenya, and Rwanda. </li>
            
            <li><span class="font-semibold">2.	African Coffee Club :</span> African Coffee Club focuses on sourcing and roasting premium coffee beans exclusively from African countries, offering a curated selection of high-quality beans from Ethiopia, Kenya, Tanzania, and more. </li>
            <li><span class="font-semibold">3.	Red Rooster Coffee Roaster:</span> Red Rooster Coffee Roaster sources and roasts coffee beans from various African regions, with an emphasis on direct trade relationships and sustainable farming practices. </li>
            <li><span class="font-semibold">4.	Equator Coffees:</span> Equator Coffees offers a range of single-origin African coffees, highlighting the unique flavors and characteristics of beans from Ethiopia, Kenya, Rwanda, and other African countries.</li>
            <li><span class="font-semibold">5. Port of Mokha:</span> Port of Mokha specializes in sourcing and roasting Yemeni coffee beans, known for their unique and complex flavor profiles derived from centuries-old cultivation methods in the region.</li>
            <li><span class="font-semibold">6. JoJo's Beans:</span> JoJo's Beans sources and roasts coffee beans from East African countries like Ethiopia, Kenya, and Tanzania, focusing on highlighting the diverse flavor profiles of African coffees. </li>
            <li><span class="font-semibold">7. Marley Coffee:</span> Marley Coffee offers a selection of African coffees, including beans from Ethiopia and Rwanda, with a focus on organic farming practices and sustainable sourcing. </li>
            <li><span class="font-semibold">8. Song Bird Coffee:</span>  Song Bird Coffee specializes in sourcing and roasting African coffees, including beans from Ethiopia, Kenya, and Burundi, with a commitment to quality and sustainability. </li>
            <li><span class="font-semibold">9. Black Oak Coffee Roasters:</span> Black Oak Coffee Roasters offers a variety of single-origin African coffees, sourcing beans from countries like Ethiopia, Kenya, and Tanzania, and roasting them to highlight their unique flavors.</li> <br>
            Queen City Collective Coffee: Queen City Collective Coffee sources and roasts coffee beans from African countries, offering a selection of single-origin coffees with distinct flavor profiles from regions like Ethiopia, Kenya, and Burundi.
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="europa" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Europa</h1>
            <h2 class="text-3xl text-white font-bold">
              Europa Coffee: A Taste of European Excellence in Every Cup.
            </h2>
          </div>
        </div>

        <div class="container py-6 text-lg">
          <p class="text-3xl font-semibold py-3">CoffeeX Europa</p>
          <p>
            In the 17th century, coffee made its way to Europe through trade routes with the Arab world. Quickly gaining popularity, coffeehouses began sprouting across major European cities like Venice, Constantinople (now Istanbul), and London. These establishments, known as "penny universities," became hubs for social interaction, intellectual discourse, and business dealings. Coffeehouses were frequented by a diverse clientele, including scholars, merchants, and artists, earning them the moniker "Schools of the Wise." <br>
            As coffee culture flourished, it spread to other European cities such as Paris, Vienna, and Amsterdam. Each city developed its own unique coffee traditions and rituals, contributing to the rich tapestry of European coffee culture. The Viennese coffeehouse culture, for instance, became celebrated for its elegant ambiance and specialty coffee drinks like the Viennese Melange. Simultaneously, European colonial powers expanded coffee cultivation in their overseas territories, particularly in the Americas, further fueling the availability and popularity of coffee in Europe. <br>
            By the 18th century, coffee had firmly entrenched itself as a beloved beverage across Europe, enjoyed by people from all walks of life. The proliferation of coffeehouses not only facilitated the spread of coffee culture but also played a pivotal role in shaping European society, fostering intellectual exchange and social interaction. Today, Europe boasts a vibrant coffee scene, with each country preserving its unique coffee traditions while embracing the global coffee culture that has been centuries in the making.
            
          </p>
          <p class="py-4">
            <span class="pb-2 text-lg italic">Coffee Europa Beans Properties/Details</span> <br>
            <span>Coffee beans cultivated in Europe exhibit a range of properties influenced by the continent's diverse climates and growing conditions. Here are some key properties of European coffee beans:</span> <br> <br>
            
            <span class="font-semibold" >1.	Altitude of Cultivation:  </span> European coffee beans are typically cultivated at moderate to high altitudes, depending on the specific region. In countries like Italy and Portugal, coffee is grown at altitudes ranging from 500 to 1500 meters above sea level. This altitude provides optimal conditions for coffee cultivation, allowing for slower maturation and enhanced flavor development. <br>
            
            <span class="font-semibold">2.	Caffeine Percentage: </span> European coffee beans generally have a moderate to high caffeine content, depending on factors such as bean variety and processing methods. On average, European coffee beans have a caffeine percentage ranging from 1.2% to 1.8%, contributing to the stimulating effects of the beverage. <br>
            <span class="font-semibold">3.	Sugar Content: </span> The sugar content in European coffee beans varies depending on factors such as growing conditions and bean variety. European coffee beans typically have a sugar content ranging from 5% to 8%, contributing to their natural sweetness and flavor complexity. <br>
            <span class="font-semibold">4.	Flavor Profiles: </span> European coffee beans offer a wide range of flavor profiles, influenced by factors such as terroir, bean variety, and roasting techniques. Italian espresso blends, for example, are known for their rich and intense flavor profiles, with notes of chocolate, caramel, and nuts. Portuguese coffee beans often exhibit a smoother and more balanced flavor profile, with hints of fruit and spice. <br>
            <span class="font-semibold">5.	Processing Methods: </span> European coffee beans are processed using a variety of methods, including washed, natural, and semi-washed processing. Washed processing is common in European countries like Italy and Portugal, resulting in clean and bright flavors. Natural processing, on the other hand, can produce more intense and fruity flavor profiles. <br>
            <span class="font-semibold">6.	Environmental Factors:  </span> European coffee beans are cultivated in a variety of environmental conditions, ranging from the mild climates of southern Europe to the cooler climates of northern Europe. These diverse growing conditions contribute to the unique terroir of European coffee, influencing factors such as acidity, body, and flavor complexity. <br> <br>
            Overall, European coffee beans offer a diverse range of flavors and characteristics, reflecting the continent's rich coffee heritage and dedication to quality. From the bold and intense flavors of Italian espresso to the smooth and balanced profiles of Portuguese coffee, European coffee beans provide a satisfying drinking experience enjoyed by coffee enthusiasts around the world.

            <p class="text-xl italic py-2">Brands of CoffeeX Europa Beans.</p>
            The best brands of CoffeeX America out of many are:
            <ul class="font-semibold">
              <li>1.	Lavazza</li>
              <li>2.	Illy</li>
              <li>3.	Segafredo Zanetti</li>
              <li>4.	Julius Meinl</li>
              <li>5.	Dallmayr</li>
              <li>6.	Pellini Caffè</li>
              <li>7.	Kimbo</li>
              <li>8.	Musetti</li>
              <li>9.	Melitta</li>
              <li>10.	Pellini Espresso</li>
            </ul>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="h-[70vh] w-full relative">
          <img :src="asia" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">CoffeeX Asia</h1>
            <h2 class="text-3xl text-white font-bold">
              Discover the Richness of Asia in Every Sip
            </h2>
          </div>
        </div>

        <div class="container py-6 text-lg">
          <p class="text-3xl font-semibold py-3">CoffeeX Asia</p>
          <p>
            In the Indo-Pak region, coffee has a relatively shorter history compared to other regions, but it has still left a notable mark. While tea remains the dominant beverage in the Indo-Pak region, coffee has gained popularity in recent decades, especially among urban populations and in upscale cafes and restaurants. <br>
            Coffee cultivation in the Indo-Pak region primarily takes place in countries like India and Pakistan, The first coffee plantation in India was established in the state of Karnataka during the 17th century by Baba Budan, a Sufi saint who brought coffee beans from Yemen. This region, known as Chikmagalur, soon became a hub for coffee cultivation in India. Indian coffee is known for its unique flavor profiles, influenced by factors such as altitude, soil, and climate. Similarly, Pakistan has also seen a rise in coffee consumption, with specialty coffee shops and cafes becoming increasingly common in urban centers like Karachi, Lahore, and Islamabad. <br>
            Although coffee may not have the same longstanding cultural heritage in the Indo-Pak region as it does in other parts of the world, its growing popularity underscores its potential as a beverage of choice for a new generation of coffee enthusiasts. As coffee culture continues to evolve in the Indo-Pak region, it reflects the region's changing tastes and preferences, adding to the rich tapestry of global coffee consumption. <br>
            
            
          </p>
          <p class="py-4">
            <span class="pb-2 text-xl italic">Coffee Indo-Pak Beans Properties/Details </span> <br>
            <p>Coffee beans cultivated in South-East Asia possess unique properties influenced by the region's tropical climate and diverse growing conditions. Here are some key properties of South-East Asian coffee beans:</p> <br> <br>
            
            <span class="font-semibold" >1.	Altitude of Cultivation:  </span> South-East Asian coffee beans are processed using a variety of methods, including wet processing (washed), dry processing (natural), and semi-washed processing. Each method can impart unique flavors and characteristics to the beans, with wet processing typically resulting in cleaner and brighter flavors, while dry processing can produce more intense and fruity profiles. <br>
            
            <span class="font-semibold">2.	Caffeine Percentage: </span> South-East Asian coffee beans offer a wide range of flavor profiles, influenced by factors such as terroir, bean variety, and processing methods. Indonesian coffee, for example, often exhibits earthy and spicy notes, with hints of chocolate and tobacco. Vietnamese coffee is known for its bold and robust flavor, with a slightly bitter taste and smooth finish. <br>
            <span class="font-semibold">3.	Sugar Content: </span> South-East Asia is known for producing both Arabica and Robusta coffee beans. Arabica beans are typically grown in higher-altitude regions and are prized for their nuanced flavors and acidity. Robusta beans, on the other hand, are commonly cultivated in lower-altitude areas and are known for their bold, earthy flavors and higher caffeine content. <br>
            <span class="font-semibold">4.	Flavor Profiles: </span> The sugar content in South-East Asian coffee beans varies depending on factors such as growing conditions and bean variety. While specific data may vary, South-East Asian coffee beans typically have a sugar content ranging from 5% to 8%, contributing to their natural sweetness and flavor complexity.<br>
            <span class="font-semibold">5.	Processing Methods: </span> South-East Asian coffee beans generally have a moderate to high caffeine content, depending on factors such as bean variety and processing methods. Robusta beans, which are commonly grown in the region, tend to have a higher caffeine content compared to Arabica beans. <br>
            <span class="font-semibold">6.	Environmental Factors:  </span> South-East Asian coffee beans are processed using a variety of methods, including wet processing (washed), dry processing (natural), and semi-washed processing. Each method can impart unique flavors and characteristics to the beans, with wet processing typically resulting in cleaner and brighter flavors, while dry processing can produce more intense and fruity profiles. <br> <br>

            South-East Asian coffee beans are processed using a variety of methods, including wet processing (washed), dry processing (natural), and semi-washed processing. Each method can impart unique flavors and characteristics to the beans, with wet processing typically resulting in cleaner and brighter flavors, while dry processing can produce more intense and fruity profiles.
            
            <p class="text-xl italic py-2">Brands of CoffeeX Europa Beans.</p>
            The best brands of CoffeeX America out of many are:
            <ul class="font-semibold">
              <li>1.	Old Town White Coffee: </li>
              <li>2.	Trung Nguyen Coffee</li>
              <li>3.	Café de Lao</li>
              <li>4.	Kopi Kenangan</li>
              <li>5.	Boncafé</li>
              <li>6.	Araku Coffee</li>
              <li>7.	Blue Tokai Coffee Roasters</li>
              <li>8.	VietCafe</li>
              <li>9.	Tad Coffee</li>
              <li>10.	Thai Highland Coffee</li>
            </ul>
          </p>
        </div>
      </swiper-slide>
      
      <!-- <swiper-slide v-for="(item, index) in coffeeData" class="">
        <div class="h-[70vh] w-full relative">
          <img :src="coffee2" alt="" />
          <div
            class="bg-[#00000085] absolute z-10 h-fit w-full top-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center px-[5%] py-[60px]"
          >
            <h1 class="text-5xl text-white font-bold">
              {{ item.name }}
            </h1>
            <h2 class="text-3xl text-white font-bold">
              {{ item.subTitle }}
            </h2>
          </div>
        </div>

        <div class="container py-20 text-lg">
          <div class="text-4xl font-bold py-5">{{ item.name }}</div>
          <p>{{ item.description }}</p>
        </div>
      </swiper-slide> -->
    </swiper>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
