package br.com.streaming.saver.repository;

import br.com.streaming.saver.entity.Gasto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GastoRepository extends JpaRepository<Gasto, Long> {

}
