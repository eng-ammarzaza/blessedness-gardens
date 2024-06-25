import { useEffect } from "react";
import ParallaxAround from "../ui/ParallaxAround";
import { useAround } from "../services/useAround";
import FullSpinner from "../ui/FullSpinner";
function Around() {
  const { isLoading, around } = useAround();

  useEffect(() => {
    document.title = "Blessedness Gardes: Around";
    return function () {
      document.title = "Blessedness Gardes";
    };
  }, []);
  console.log(around);
  if (isLoading) return <FullSpinner />;
  return (
    <>
      <ParallaxAround image={around[1].media}>
        Indulge in our amazing restaurants, where each bite is a culinary
        experience to remember. From world-class chefs crafting exquisite dishes
        with locally sourced ingredients to a sophisticated ambiance that exudes
        elegance, our dining establishments are the perfect destination for food
        enthusiasts. Whether you're craving a decadent steak dinner, fresh
        seafood platter, or a mouthwatering dessert, our diverse menu options
        are sure to satisfy even the most discerning palate. Treat yourself to a
        dining experience like no other and savor the flavors of luxury at our
        hotel.
      </ParallaxAround>
      <ParallaxAround image={around[2].media}>
        From yoga retreats and meditation classes to spa treatments and nature
        walks, there are plenty of ways to unwind and de-stress. Our hotel also
        offers a range of wellness amenities, such as a fully-equipped fitness
        center, a tranquil outdoor pool, and on-site massage services. Guests
        can also partake in guided mindfulness sessions and nutritional
        workshops to promote overall well-being. Whether you're looking to
        pamper yourself with a pampering spa day or simply unwind in our
        peaceful surroundings, our region has something to offer for everyone
        looking to enhance their relaxation and wellness experience.
      </ParallaxAround>
      <ParallaxAround image={around[3].media}>
        with a variety of species inhabiting its forests, mountains, and
        wetlands. The region is home to a rich array of mammals, including deer,
        wild boar, and red squirrels. Birdwatchers will be delighted by the
        numerous species of birds that can be seen in Bavaria, such as the black
        woodpecker, golden eagle, and capercaillie. In the lakes and rivers,
        otters and beavers can be spotted, while the alpine meadows are
        frequented by ibex and chamois. Bavaria's wildlife is an integral part
        of its natural beauty, drawing visitors and nature enthusiasts from all
        over the world to witness the wonders of its untamed landscapes.
      </ParallaxAround>
      <ParallaxAround image={around[0].media}>
        {" "}
        Bavaria is a region in Germany with many historic sites, including the
        Neuschwanstein Castle and the town of Rothenburg ob der Tauber. The
        bustling city of Munich is also worth exploring, with its Oktoberfest
        celebration and vibrant arts scene. Bavaria's blend of traditional
        culture and history makes it a must-visit destination for those seeking
        to learn about Germany's past.
      </ParallaxAround>
    </>
  );
}

export default Around;
