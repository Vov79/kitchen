"use server";
async function sumbitForm(data: FormData) {
  const name = data.get("name");
  const tel = data.get("tel");
  const kitchen = data.get("kitchen");

  if(!name || !tel ) {
    return
  }

  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  let message = "";

  if (kitchen) {
    message = `${name} a lasat un mesaj. Numarul:${tel}. Produsul dorit este: ${kitchen}`;
  } else {
    message = `${name} a lasat un mesaj. Numarul:${tel}`;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
  try {
    await fetch(url);
  } catch (error) {
    console.error(error);
  }
}

export { sumbitForm };
