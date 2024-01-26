# SeSAC

---
## Crawling

### requests를 사용해서 채용사이트의 정보를 가져왔습니다.
```py
position_data = []
useful_keys = ('id', 'title', 'companyName', 'serviceInfo', 'responsibility', 'qualifications', 'preferredRequirements', 'welfares', 'recruitProcess', 'location', 'companyProfileId', 'companyUrl', 'alwaysOpen')
career_keys = ('newcomer', 'minCareer', 'maxCareer', 'education', 'graduate')
period_keys = ('publishedAt', 'closedAt')

positions = []
companies = []
position_keys = ('jobCategories_id', 'jobCategories', 'techStacks', 'responsibility', 'qualifications', 'preferredRequirements')
company_keys = ('companyProfileId', 'companyName', 'serviceInfo', '''companyUrl', 'address')
company_keys = ('companyProfileId', 'companyName', 'serviceInfo', 'welfares', 'companyUrl', 'address')

visited_companies = set()

# 채용 정보 저장
for id in tqdm(position_ids):
    response = requests.get(f'https://api.jumpit.co.kr/api/position/{id}', cookies=cookies, headers=headers)
    response = response.json()["result"]
    data = {key: response[key] for key in useful_keys}
    data.update({
        'techStacks': [stack['stack'] for stack in response['techStacks']], 
        'employmentType': response['jobPostingForSearchEngine']['employmentType'], 'experienceRequirements': response['jobPostingForSearchEngine']['experienceRequirements'],
        'address': response['workingPlaces'][0]['address'], 'isDomestic': response['workingPlaces'][0]['isDomestic'], 
        'jobCategories_id': response['jobCategories'][0]['id'], 'jobCategories': response['jobCategories'][0]['name'],
        'recruitPeriod': [response[key] for key in period_keys],
        'career': [response[key] for key in career_keys]
        })
    position_data.append(data)
    positions.append({key: data[key] for key in position_keys})
    if (company_id:=data['companyProfileId']) not in visited_companies:
        companies.append({key: data[key] for key in company_keys})
        visited_companies.add(company_id)
```

---
## Visualization

### 직무별 공고 비율 및 요구 스택 통계 자료를 matplotlib과 seaborn으로 시각화했습니다. 
![Pie Chart - Job posting ratio by position](https://github.com/k4west/SeSAC/assets/125423305/27b860c7-b455-45bd-bfd9-37fc56e73eb3)
![Required stacks bt position](https://github.com/k4west/SeSAC/assets/125423305/d1a26426-cb9d-44ca-b244-2b4a557b3c9a)
