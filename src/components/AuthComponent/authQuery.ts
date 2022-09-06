export const queryGetMessageById = (id: string, text: string) => {
  return {
    query: `query GetMessageById($idVal: ID!, $textVal: String){
        message: getMessage(id: $idVal) {
          author,
          content
        },
        content: content(text: $textVal)
      }
    `,
    variables: {
      idVal: id,
      textVal: text,
    },
  };
};
