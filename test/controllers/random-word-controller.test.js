const request = require('supertest');

const app = require('../../src/app');

jest.mock('../../src/repository/word-repository');
const repository = require('../../src/repository/word-repository');

describe('derdiedas controller', () => {
    it('should return object', async done => {
        const mockDerDieDas = {
            articles: ['die'],
            word: 'Mutter',
            categories: ['other'],
        };
        repository.getDerDieDas.mockResolvedValue([mockDerDieDas]);

        const { status, body } = await request(app).get('/deutsch/derdiedas');

        expect(status).toBe(200);
        expect(body).not.toBeNull();
        expect(body).not.toBeUndefined();

        const { word } = body;
        const { word: mockWord } = mockDerDieDas;

        expect(word).toBe(mockWord);

        done();
    });

    it('should return a generic server error', async done => {
        repository.getDerDieDas.mockImplementation(() => {
            throw new Error('simple internal error');
        });

        const { status, body } = await request(app).get('/deutsch/derdiedas');

        expect(status).toBe(500);
        expect(body).not.toBeNull();
        expect(body).not.toBeUndefined();

        const { mensagens } = body;
        const [message] = mensagens;
        const { codigo, mensagem } = message;
        expect(codigo).toBe(500);
        expect(mensagem).toBe('Ocorreu um erro no servidor.');

        done();
    });
});
