export const medicineData = {
  medicines: [
    {
      id: "paracetamol",
      name: "Paracetamol",
      category: "Pain Relief",
      purpose: "Helps relieve mild to moderate pain and reduce fever.",
      description:
        "Paracetamol is commonly used for headaches, fever, and body aches.",
      commonUses: ["Headache", "Fever", "Toothache", "Muscle pain"],
      importantInfo:
        "Follow the dose on the label and avoid taking other medicines that contain paracetamol at the same time.",
      warning:
        "Do not exceed the recommended dose. Some products contain high-strength paracetamol.",
    },
    {
      id: "ibuprofen",
      name: "Ibuprofen",
      category: "Pain Relief",
      purpose: "Helps reduce pain, inflammation, and fever.",
      description:
        "Ibuprofen is often used for back pain, sore muscles, and some inflammatory conditions.",
      commonUses: ["Back pain", "Joint pain", "Fever", "Period pain"],
      importantInfo:
        "Take with food or milk if it upsets your stomach. Do not take it if you are allergic to NSAIDs.",
      warning:
        "Do not use ibuprofen if you have a stomach ulcer, kidney problems, or are pregnant unless advised by a clinician.",
    },
    {
      id: "cetirizine",
      name: "Cetirizine",
      category: "Allergy",
      purpose: "Helps relieve symptoms caused by allergies.",
      description:
        "Cetirizine is an antihistamine commonly used for hay fever and hives.",
      commonUses: ["Sneezing", "Runny nose", "Itchy eyes", "Hives"],
      importantInfo:
        "Cetirizine can make some people feel sleepy. Follow the product label and ask a pharmacist if unsure.",
      warning:
        "Check with a healthcare professional before use for young children or if you have kidney problems.",
    },
    {
      id: "loperamide",
      name: "Loperamide",
      category: "Digestive",
      purpose: "Can help control short-term diarrhea.",
      description:
        "Loperamide slows movement in the gut and may reduce frequent loose stools.",
      commonUses: ["Short-term diarrhea", "Frequent loose stools"],
      importantInfo:
        "Drink fluids to avoid dehydration and follow the product label. Do not use it for longer than directed.",
      warning:
        "Seek medical advice for bloody diarrhea, high fever, severe abdominal pain, dehydration, or symptoms lasting more than 48 hours. Do not give to children under 2 years.",
    },
    {
      id: "antacid",
      name: "Antacid",
      category: "Digestive",
      purpose: "Can provide short-term relief from heartburn and indigestion.",
      description:
        "Antacids neutralize stomach acid. Different products contain different ingredients.",
      commonUses: ["Heartburn", "Indigestion", "Acid discomfort"],
      importantInfo:
        "Follow the product label. Antacids can affect how other medicines are absorbed, so check whether doses need to be spaced apart.",
      warning:
        "Ask a pharmacist or clinician before use if you have kidney disease, take other medicines, or need frequent relief.",
    },
    {
      id: "omeprazole",
      name: "Omeprazole",
      category: "Digestive",
      purpose: "Reduces stomach acid and may help with reflux and heartburn.",
      description:
        "Omeprazole is a proton pump inhibitor used for some acid-related conditions.",
      commonUses: ["Acid reflux", "Heartburn", "Stomach ulcers"],
      importantInfo:
        "Use it as directed on the label or by a healthcare professional. It may not provide immediate relief.",
      warning:
        "Ask a clinician or pharmacist if symptoms persist or worsen. Seek urgent care for vomiting blood or black stools.",
    },
    {
      id: "amoxicillin",
      name: "Amoxicillin",
      category: "Antibiotic",
      purpose: "A prescription antibiotic used for certain bacterial infections.",
      description:
        "Amoxicillin is a penicillin-type antibiotic. It does not treat viral illnesses such as colds or flu.",
      commonUses: ["Certain ear infections", "Certain chest infections", "Other susceptible bacterial infections"],
      importantInfo:
        "Use only when prescribed for you and take it exactly as directed. Do not share or save antibiotics for later.",
      warning:
        "Tell the prescriber if you have a penicillin allergy. Get urgent help for signs of a severe allergic reaction.",
    },
    {
      id: "salbutamol",
      name: "Salbutamol",
      category: "Respiratory",
      purpose: "A reliever medicine that can ease wheezing and shortness of breath.",
      description:
        "Salbutamol is a bronchodilator commonly supplied as an inhaler for conditions such as asthma.",
      commonUses: ["Wheezing", "Shortness of breath", "Chest tightness"],
      importantInfo:
        "Use the inhaler and spacer as shown by your healthcare professional, and follow your asthma action plan.",
      warning:
        "If breathing difficulty is severe, worsening, or not relieved by your prescribed reliever, seek emergency medical care.",
    },
    {
      id: "loratadine",
      name: "Loratadine",
      category: "Allergy",
      purpose: "Helps relieve allergy symptoms like sneezing and itchy eyes.",
      description:
        "Loratadine is a non-drowsy antihistamine commonly used for seasonal allergies.",
      commonUses: ["Sneezing", "Runny nose", "Itchy eyes", "Allergic rash"],
      importantInfo:
        "It is usually less sedating than some other allergy medicines.",
      warning:
        "Avoid alcohol and check with a pharmacist if you also take other medicines for colds or allergies.",
    },
    {
      id: "oral-rehydration-salts",
      name: "Oral Rehydration Salts",
      category: "Hydration",
      purpose: "Help replace water and salts lost through diarrhea or vomiting.",
      description:
        "Oral rehydration salts are mixed with clean water to make an oral rehydration solution.",
      commonUses: ["Fluid loss from diarrhea", "Fluid loss from vomiting"],
      importantInfo:
        "Mix the sachet with exactly the amount of safe water stated on its package. Do not add extra sugar or salt.",
      warning:
        "Seek medical care for severe dehydration, inability to keep fluids down, blood in stool, or worsening symptoms.",
    },
  ],
} as const;

export type Medicine = (typeof medicineData.medicines)[number];

export async function fetch(url: string) {
  if (url !== "/api/medicines") {
    return {
      ok: false,
      json: async () => ({})
    } as any;
  }

  return {
    ok: true,
    json: async () => medicineData,
  } as any;
}
