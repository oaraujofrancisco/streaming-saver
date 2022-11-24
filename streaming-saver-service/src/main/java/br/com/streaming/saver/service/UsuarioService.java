package br.com.streaming.saver.service;

import br.com.streaming.saver.entity.Usuario;
import br.com.streaming.saver.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    private Boolean buscarUsuarioPorEmail(String email) {

        List<Usuario> usuarioEncontrado = this.usuarioRepository.findByEmail(email);

        return usuarioEncontrado.stream().anyMatch(usuario -> Objects.equals(usuario.getEmail(), email));
    }

    public Usuario buscarPorId(Long id) {
        return this.usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuario não encontrado"));
    }

    public Usuario salvarUsuario(Usuario usuarioParaSalvar) {

        if (this.buscarUsuarioPorEmail(usuarioParaSalvar.getEmail())) {
            throw new RuntimeException("Email já cadastrado");
        }

        usuarioParaSalvar.setId(null);
        usuarioParaSalvar.setNome(usuarioParaSalvar.getEmail());

        return usuarioRepository.save(usuarioParaSalvar);
    }


    public Usuario validarUsuario(String email, String senha) {

        if (this.buscarUsuarioPorEmail(email)) {
            return usuarioRepository.findByEmailAndSenha(email, senha);
        }

        throw new RuntimeException("Nenhum usuário cadastrado com esse e-mail, por favor se cadastre");
    }
}
