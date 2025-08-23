<script lang="ts">
  type HeaderProps = {
    header: string;
    subHeader: string;
  };
  const props: HeaderProps= $props()
  const {
    header,
    subHeader
  } = props;
</script>

<header>
    <h1>Header is : {header}</h1>
    <h2>Sub-header is : {subHeader}</h2>
</header>
