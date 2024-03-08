import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FaSave, FaTimes } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [form, setForm] = useState({
    nomeFornitore: "",
    nomeContatto: "",
    emailContatto: "",
    telefonoContatto: "",
    indirizzo: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.nomeFornitore) {
      toast({
        title: "Errore",
        description: "Il nome del fornitore è un campo obbligatorio.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!form.emailContatto) {
      toast({
        title: "Errore",
        description: "Inserire un indirizzo email valido.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Redirect the user to the supplier list with a success notification
    // For now, we will just show a toast message.
    toast({
      title: "Fornitore salvato",
      description: "Il fornitore è stato salvato con successo.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleCancel = () => {
    // Redirect the user to the supplier list or previous page
    toast({
      title: "Annullamento",
      description: "Nessuna modifica salvata.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Creazione Fornitore</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Nome Fornitore</FormLabel>
          <Input name="nomeFornitore" value={form.nomeFornitore} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Nome Contatto</FormLabel>
          <Input name="nomeContatto" value={form.nomeContatto} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email Contatto</FormLabel>
          <Input name="emailContatto" type="email" value={form.emailContatto} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Telefono Contatto</FormLabel>
          <Input name="telefonoContatto" value={form.telefonoContatto} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Indirizzo</FormLabel>
          <Textarea name="indirizzo" value={form.indirizzo} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Note</FormLabel>
          <Textarea name="note" value={form.note} onChange={handleChange} />
        </FormControl>
        <Button leftIcon={<FaSave />} colorScheme="blue" onClick={handleSubmit}>
          Salva
        </Button>
        <Button leftIcon={<FaTimes />} colorScheme="red" onClick={handleCancel}>
          Annulla
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
