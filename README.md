# supplier-creation-page

Pagina Creazione Fornitore
Campi del Form:
Nome Fornitore (string): Campo di testo per il nome completo del fornitore. Questo campo è obbligatorio.
Nome Contatto (string): Campo di testo per il nome della persona di contatto presso il fornitore.
Email Contatto (string): Campo di testo per l'email del contatto, per comunicazioni dirette.
Telefono Contatto (string): Campo di testo per il numero di telefono del contatto.
Indirizzo (string): Un campo di testo più ampio per l'indirizzo del fornitore, includendo via, numero civico, città, CAP, e paese.
Note (string): Area di testo opzionale per qualsiasi nota aggiuntiva riguardante il fornitore.
Elementi Addizionali:
Bottone Salva: Utilizzato per confermare l'aggiunta del nuovo fornitore o le modifiche ad uno esistente. Dopo il salvataggio, l'utente potrebbe essere reindirizzato all'elenco dei fornitori con una notifica di conferma.
Bottone Annulla: Permette di uscire senza salvare alcuna modifica, riportando l'utente all'elenco dei fornitori o alla pagina precedente.
Validazione del Form: Il sistema dovrebbe assicurarsi che i campi obbligatori (nome fornitore, almeno un contatto) siano compilati e che l'email inserita segua un formato valido.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/supplier-creation-page.git
cd supplier-creation-page
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
