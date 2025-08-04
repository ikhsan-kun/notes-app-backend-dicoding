const routes = (handler) => [
  {
    method: "POST",
    path: "/notes",
    handler: handler.postNoteHandler, // ganti
  },
  {
    method: "GET",
    path: "/notes",
    handler: handler.getNotesHandler, // ganti
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: handler.getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: handler.putNoteByIdHandler, // ganti
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
