"use server";
async function sumbitForm(withKitchen: boolean, data: FormData) {
  "use server";

  const name = data.get("name");
  const tel = data.get("tel");
  const kitchen = data.get("kitchen");

  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  let message = "";

  if (withKitchen) {
    message = `${name} a lasat un mesaj. Numarul:${tel}. Produsul dorit este: ${kitchen}`;
  } else {
    message = `${name} a lasat un mesaj. Numarul:${tel}`;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

  await fetch(url);
}

export { sumbitForm };
