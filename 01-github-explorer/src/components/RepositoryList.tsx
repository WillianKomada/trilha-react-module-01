import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/WillianKomada/repos") // quando eu fizer uma chamada a api
      .then((response) => response.json()) // eu recebo a resposta e converto pra json
      .then((data) => setRepositories(data)); // quando a resposta pra json terminar de ser convertida, terei meus dados do repositório
  }, []);

  return (
    <div className="repository-container">
      <section className="repository-list">
        <div className="repository-header">
          <div className="card-h1">
            <h1>Meus repositórios</h1>
          </div>
          <div className="card-github">
            <span>
              Mais informações:
              <a href="https://github.com/williankomada" target="_blank">
                GitHub
              </a>
            </span>
          </div>
        </div>

        <ul>
          {repositories.map((repository) => {
            return (
              <RepositoryItem key={repository.name} repository={repository} />
            );
          })}
        </ul>
      </section>
    </div>
  );
}
