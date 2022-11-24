package br.com.streaming.saver.controller;

import br.com.streaming.saver.entity.Usuario;
import br.com.streaming.saver.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/usuario")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }


    @GetMapping
    public ResponseEntity<Usuario> buscarTodos(
            @RequestParam(value = "email", defaultValue = "") String email,
            @RequestParam(value = "senha", defaultValue = "") String senha
    ) {
        return ResponseEntity.ok(usuarioService.validarUsuario(email, senha));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(usuarioService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Usuario> salvarUsuario(@RequestBody Usuario usuario) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.salvarUsuario(usuario));
    }


}
