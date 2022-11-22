package br.com.streaming.saver.service;

import br.com.streaming.saver.entity.Streaming;
import br.com.streaming.saver.repository.StreamingRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class StreamingService {

    private final StreamingRepository streamingRepository;

    public StreamingService(StreamingRepository streamingRepository) {
        this.streamingRepository = streamingRepository;
    }


    public List<Streaming> buscarTodos(Long usuarioId) {
        return streamingRepository.findByUsuario_Id(usuarioId);
    }

    public Streaming buscarPorId(Long id) {
        Optional<Streaming> streamingOptionalOptional = streamingRepository.findById(id);
        if (streamingOptionalOptional.isEmpty()) {
            throw new RuntimeException("Streaming não encontrado");
        }

        return streamingOptionalOptional.get();
    }

    public Streaming salvarStreaming(Streaming streaming) {
        streaming.setId(null);
        streaming.setAtivado(true);
        streaming.setUltimaAtualizacao(LocalDate.now());
        streaming.setUltimoAcesso(LocalDate.now());
        return streamingRepository.save(streaming);
    }

    public Streaming atualizarStreaming(Long id, Streaming streaming) {
        Streaming streamingParaAtualizar = buscarPorId(id);

        streamingParaAtualizar.setNome(streaming.getNome());
        streamingParaAtualizar.setValor(streaming.getValor());
        streamingParaAtualizar.setTipoGasto(streaming.getTipoGasto());
        streamingParaAtualizar.setFormaPagamento(streaming.getFormaPagamento());
        streamingParaAtualizar.setUltimaAtualizacao(LocalDate.now());
        streamingParaAtualizar.setAtivado(streaming.getAtivado());
        streamingParaAtualizar.setUltimoAcesso(streamingParaAtualizar.getUltimoAcesso());

        return streamingRepository.save(streamingParaAtualizar);
    }

    public List<Streaming> excluirStreaming(Long id) {
        Streaming streamingParaExcluir = buscarPorId(id);
        Long usuarioId = streamingParaExcluir.getId();
        streamingRepository.delete(streamingParaExcluir);

        return buscarTodos(usuarioId);
    }
}
