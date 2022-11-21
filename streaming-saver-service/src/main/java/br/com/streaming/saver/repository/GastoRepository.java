package br.com.streaming.saver.repository;

import br.com.streaming.saver.entity.Gasto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GastoRepository extends JpaRepository<Gasto, Long> {

    List<Gasto> findByUsuariobyId(Long id);
}
