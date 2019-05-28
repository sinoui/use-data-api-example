import React from 'react';
import ArticleList from './ArticleList';
import QueryForm from './QueryForm';
import LoadingIndicator from './LoadingIndicator';
import useDataApi from '@sinoui/use-data-api';

function App() {
  const { data, isLoading, isError, doFetch } = useDataApi(
    '//hn.algolia.com/api/v1/search?query=react',
    {
      hits: [],
    },
  );

  const handleSubmit = (query) => {
    doFetch(`//hn.algolia.com/api/v1/search?query=${query}`);
  };

  return (
    <div className="container">
      <QueryForm handleSubmit={handleSubmit} />
      {isError && <div>加载数据失败。</div>}
      {isLoading ? <LoadingIndicator /> : <ArticleList articles={data.hits} />}
    </div>
  );
}

export default App;
