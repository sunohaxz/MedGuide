# MedGuide

MedGuide is a mobile-friendly medicine information app built with Expo and React Native. It helps users browse common medicines, search by name or purpose, filter by category, and view key safety information and usage notes for general educational awareness.

> Important: MedGuide is informational only and does not replace professional medical advice, diagnosis, or treatment.

## Features

- Home screen with a simple welcome flow
- Medicine directory with search and category filters
- Detailed medicine cards with:
  - purpose
  - description
  - common uses
  - important information
  - safety warnings
- Cross-platform support for Android, iOS, and the web
- File-based navigation using Expo Router
- TypeScript-based app structure

## Tech stack

- Expo SDK 57
- React Native 0.86
- Expo Router
- TypeScript
- React Native web support

## Requirements

- Node.js LTS (recommended 20+)
- npm or another package manager
- Android emulator, iOS simulator, or Expo Go for device testing
- Optional: Expo CLI access via `npx expo`

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sunohaxz/MedGuide.git
   cd MedGuide
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npx expo start
   ```

4. Use the terminal output to open the app in one of the following:
   - Android emulator
   - iOS simulator
   - Expo Go on a physical device
   - Web preview by pressing `w` in the terminal

## Available scripts

```bash
npm start
npm run android
npm run ios
npm run web
npm run lint
```

### Script descriptions

- `npm start` runs the Expo dev server
- `npm run android` launches the app in Android mode
- `npm run ios` launches the app in iOS mode
- `npm run web` launches the app in a browser
- `npm run lint` runs the Expo linting setup

## Usage

### 1. Open the app

When the Expo server starts, the app opens on the home screen. From there, users can navigate to the medicine browser.

### 2. Browse medicines

Select the "View Medicines" action from the home screen or navigate directly to the medicine list. The list supports:

- name search
- purpose keyword search
- category filtering
- quick access to each medicine's detail page

### 3. Open a medicine detail

Tap any medicine card to view:

- category
- purpose
- definition/description
- common conditions or uses
- important instructions
- safety warnings

### 4. Learn safely

The app is designed for educational reference and general awareness. It should be used alongside trusted medical guidance, pharmacist advice, or clinician input when needed.

## App structure

```text
src/
  app/
    _layout.tsx
    about.tsx
    details.tsx
    explore.tsx
    index.tsx
    medicines.tsx
  components/
  constants/
  data/
    mock-api.ts
```

### Key files

- `src/app/index.tsx` — landing screen and welcome flow
- `src/app/medicines.tsx` — searchable medicine list and category filters
- `src/app/details.tsx` — detailed medicine page
- `src/app/about.tsx` — information screen
- `src/data/mock-api.ts` — static medicine dataset and mock fetch implementation

## Routing

This project uses Expo Router with file-based routing.

Examples:

- `/` — home screen
- `/medicines` — medicine browser
- `/details?id=<medicine-id>` — medicine detail view
- `/about` — about screen

## Mock API

This app does not currently connect to a live backend. Instead, it uses a local mock data source in `src/data/mock-api.ts`.

### Endpoint

```ts
fetch("/api/medicines")
```

### Response shape

```ts
{
  medicines: [
    {
      id: "paracetamol",
      name: "Paracetamol",
      category: "Pain Relief",
      purpose: "Helps relieve mild to moderate pain and reduce fever.",
      description: "Paracetamol is commonly used for headaches, fever, and body aches.",
      commonUses: ["Headache", "Fever", "Toothache", "Muscle pain"],
      importantInfo: "Follow the dose on the label and avoid taking other medicines that contain paracetamol at the same time.",
      warning: "Do not exceed the recommended dose. Some products contain high-strength paracetamol."
    }
  ]
}
```

### Mock API implementation

The dataset is exported as `medicineData`, and the app calls the helper function:

```ts
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
```

### Data model

```ts
export type Medicine = {
  id: string;
  name: string;
  category: string;
  purpose: string;
  description: string;
  commonUses: string[];
  importantInfo: string;
  warning: string;
};
```

## Development notes

- The medicine data is intentionally static for demo/prototype use.
- The app structure is easy to extend if you later add a real backend, API service layer, or persistent storage.
- Search and filtering logic runs locally on the client for quick browsing.

## Security and medical disclaimer

MedGuide is designed as a general reference tool. It does not provide medical diagnosis, treatment advice, or emergency guidance. In urgent or serious situations, contact a qualified healthcare professional or emergency services immediately.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome. For small changes, open a pull request with a clear summary of improvements, testing notes, and any relevant screenshots or usage examples.

## Troubleshooting

### Dependency install fails

Try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Metro bundler issues

Clear the cache:

```bash
npx expo start --clear
```

### App fails to launch on a simulator/device

Ensure:

- the simulator is running
- the device is connected and trusted
- Expo is allowed to access the device
- the development server is still active

## Next steps

Potential improvements for future versions include:

- real backend integration
- user favorites or saved medicines
- dosage and side-effect tracking
- accessibility refinements
- multilingual support
- medication reminder features
