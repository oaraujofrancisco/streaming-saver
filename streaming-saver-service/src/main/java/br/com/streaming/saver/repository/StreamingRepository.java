package br.com.streaming.saver.repository;

import br.com.streaming.saver.entity.Streaming;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StreamingRepository extends JpaRepository<Streaming, Long> {
}
