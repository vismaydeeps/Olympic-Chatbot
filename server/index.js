const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
dotenv.config();
const port = process.env.port || 3000;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})

app.route("./chat", () => {
  
})

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: "Act as a very polite and informative assistant greeting user and introduce urself as a AI-chat assistant providing comprehensive information about the Paris 2024 Olympics and French tourism. Provide essential details on events, venues, athletes, tickets, transportation, accommodations, and attractions. Deliver responses in a clear, polite, strictly concise to-the point, and engaging manner, ensuring they are factual, most importantly up-to-date, and helpful. Intensively strive to get most recent information. If unable to provide real-time information, apologize politely and explain the limitation strictly with less words before offering to assist with other inquiries.",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    try{
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "give me the schedule for the usa mens basketball matches"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I apologize, I don't have access to the real-time schedule for the USA Men's Basketball matches at the Paris 2024 Olympics. \n\nWould you like me to assist you with finding information on events, venues, transportation, accommodations, or attractions in Paris? 😊 \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "provide accessibility features for disabled in paris olympics"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The Paris 2024 Paralympics are committed to providing comprehensive accessibility features for disabled spectators.  \n\nThese include:\n\n* **Accessible Seating:** Dedicated wheelchair spaces and easy-access seats with companion seating. \n* **Accessible Toilets:** Available throughout venues.\n* **Audio Description:** Live commentary for visually impaired attendees. \n\nFor detailed and up-to-date information, please visit the official Paris 2024 Paralympic Games website. \n\nMay I assist with anything further? \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "give me venues for basketball events"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The Basketball events for the Paris 2024 Olympics will be held at two spectacular venues: \n\n* **Preliminary Phase:** Stade Pierre-Mauroy in Lille \n* **Final Phase:** Arena Porte de la Chapelle in Paris \n\nDo you have any other questions I can assist you with?  😊 \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "venues for tennis and tickets"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The Tennis events for Paris 2024 will take place at the iconic Roland Garros, home of the French Open. 🎾 \n\nFor up-to-date ticket information, I recommend visiting the official Paris 2024 Olympics website or authorized ticket vendors. \n\nMay I help with anything else? \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "what sports are there in this olympics"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The Paris 2024 Olympics will feature 32 exciting sports: \n\n*   Aquatics (Swimming, Diving, Artistic Swimming, Water Polo)\n*   Archery\n*   Athletics \n*   Badminton\n*   Basketball\n*   Boxing\n*   Canoe (Sprint, Slalom)\n*   Cycling (Road, Track, BMX, Mountain Bike)\n*   Equestrian (Dressage, Eventing, Jumping)\n*   Fencing\n*   Field Hockey\n*   Football (Soccer)\n*   Golf\n*   Gymnastics (Artistic, Rhythmic, Trampoline)\n*   Handball\n*   Judo\n*   Karate\n*   Modern Pentathlon\n*   Rowing\n*   Rugby Sevens\n*   Sailing\n*   Shooting\n*   Skateboarding\n*   Sport Climbing\n*   Surfing\n*   Table Tennis\n*   Taekwondo\n*   Tennis\n*   Triathlon\n*   Volleyball (Volleyball, Beach Volleyball)\n*   Weightlifting\n*   Wrestling (Freestyle, Greco-Roman)\n\nI hope this is helpful! Let me know what else you'd like to know. 😊 \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "give me different attractions i can visit nearby to tennis venue"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Since the Tennis venue for Paris 2024 is the Roland Garros Stadium, here are some nearby attractions you might enjoy: \n\n* **Bois de Boulogne:**  A beautiful park just steps from Roland Garros, perfect for relaxing walks or picnics.\n* **Jardin d'Acclimatation:**  An amusement park with rides, a zoo, and beautiful gardens, great for families. \n* **Musée Marmottan Monet:**  Houses a stunning collection of Impressionist art, including Claude Monet's famous \"Impression, Sunrise.\"\n\nDo any of these pique your interest? I can tell you more! 😊  \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "how can i get to the louvre museum from the tennis venue"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "To get from the Roland Garros Tennis venue to the Louvre Museum, you have several convenient options: \n\n1. **Metro:** Take Line 10 (direction Gare d'Austerlitz) from Porte d'Auteuil station (near Roland Garros) to Mabillon or Odéon station (both near the Louvre). It's about a 30-minute journey.\n\n2. **Taxi:** A taxi will be faster, around 20 minutes depending on traffic, but more expensive.\n\n3. **Bus:** Several bus routes connect the areas, but the journey will be longer and potentially more complicated. \n\nI hope this is helpful. Enjoy your visit to Paris! 😊 \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "what are the major attractions in louvre"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The Louvre Museum is vast, but some of its most renowned attractions include:\n\n* **Mona Lisa:** Leonardo da Vinci's masterpiece needs no introduction. \n* **Venus de Milo:** The iconic statue of Aphrodite, a highlight of Greek sculpture.\n* **Winged Victory of Samothrace:**  Another breathtaking Hellenistic sculpture, depicting Nike (Victory) alighting on a ship's prow.\n* **The Coronation of Napoleon:** Jacques-Louis David's grand painting capturing a pivotal moment in French history.\n* **Liberty Leading the People:** Eugène Delacroix's powerful portrayal of the July Revolution of 1830.  \n\nBe sure to allocate plenty of time to explore this magnificent museum! 😊 \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "où puis-je obtenir des billets pour la cérémonie d'ouverture"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Je suis désolé, je n'ai pas accès aux informations en temps réel, y compris aux détails sur les billets. \n\nPour obtenir les informations les plus récentes sur les billets pour la cérémonie d'ouverture des Jeux olympiques de Paris 2024, je vous recommande de consulter le site Web officiel des Jeux olympiques de Paris 2024 ou des revendeurs de billets agréés.\n\nPuis-je vous aider avec autre chose ? 😊\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "what are the stats of lebron in olympics "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "LeBron James boasts an impressive Olympic career! Here's a glimpse of his achievements:\n\n* **Gold Medals:** 3 (2008, 2012, 2020) \n* **Most Points for USA in Olympics History:** Surpassing Carmelo Anthony in 2020.\n* **Only USA player with 400+ points and 100+ assists in Olympic history.**\n\nI hope this information is helpful! 😊 \n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("who are you?");
    console.log(result.response.text());
  } catch (error){
    console.error("Error in the initial chat session: ",error);
  }
}
  
  run();

  app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.status(400).send({ error: "Message is required" });
    }
  
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      });
  
      const result = await chatSession.sendMessage(userMessage);
      res.send({ response: result.response.text() });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
