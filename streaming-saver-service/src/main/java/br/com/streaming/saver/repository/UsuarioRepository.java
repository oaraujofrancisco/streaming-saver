package br.com.streaming.saver.repository;

import br.com.streaming.saver.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    List<Usuario> findByEmail(String email);

    Usuario findByEmailAndSenha(String email, String senha);

}
