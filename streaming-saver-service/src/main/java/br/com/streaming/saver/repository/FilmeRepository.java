package br.com.streaming.saver.repository;

import br.com.streaming.saver.entity.Filme;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmeRepository extends JpaRepository<Filme, Long> {
}
